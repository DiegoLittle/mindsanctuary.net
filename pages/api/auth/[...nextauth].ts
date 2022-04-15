import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials";
// import { PrismaAdapter } from "../../../lib/prisma-adapter/dist/index"
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { PrismaClient } from "@prisma/client"
import GoogleProvider from "next-auth/providers/google";
import bcrypt from 'bcrypt'
import sendConfirmationEmail from '../../../lib/mailer'
import {session} from '../../../components/types'
import { confirmEmail } from "../../../lib/auth";

import prisma from "../../../lib/prisma"
import log from '../../../lib/analytics'


export default NextAuth({
  adapter: PrismaAdapter(prisma),
  pages: {
    // signIn: '/sign-in',
    signIn: '/auth/signin',
    error:'/auth/signin'
  },
  secret:process.env.NEXTAUTH_SECRET,
    // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),

  CredentialsProvider({
    // If User signs in with email & password and then signs in with google while logged in, it will link the OAUTH Account

    // The name to display on the sign in form (e.g. "Sign in with...")
    name: "Credentials",
    // The credentials is used to generate a suitable form on the sign in page.
    // You can specify whatever fields you are expecting to be submitted.
    // e.g. domain, username, password, 2FA token, etc.
    // You can pass any HTML attribute to the <input> tag through the object.
    credentials: {
      username: { label: "Username", type: "text", placeholder: "username" },
      password: {  label: "Password", type: "password" }
    },
    async authorize(credentials, req) {
      // console.log(req)
      // Add logic here to look up the user from the credentials supplied
      let authorized = false
      const user = await prisma.user.findUnique({
        where:{
          email: credentials.username
        }
      })
      if(user){
        authorized = await bcrypt.compare(credentials.password, user.passwordhash);
      }
      // const user = { id: 1, name: "J Smith", email: "jsmith@example.com" }

      if (authorized) {
        log.event({
          event_name:"userpass_signin",
          email:user.email
        })
        // Any object returned will be saved in `user` property of the JWT
        return user
      } else {
        
        // If you return null then an error will be displayed advising the user to check their details.
        return Promise.reject(new Error('Invalid Email or Password'))
        
        // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter        
      }
    }
  }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // ...add more providers here
  ],
  events:{
    async createUser({user}){
      log.event({
        event_name: "user_signup",
        email:user.email
      })
    }
  },
  callbacks:{
    async signIn({ user, account, profile, email, credentials }) {
      // return "/dashboard"
      if (account.provider === "google"&&(user)) {
        // confirmEmail(profile.email,profile.name)

        // Won't work if user account is being created but that's actually what we want
        log.event({
          event_name:"google_signin",
          email:user.email
        })
        // return profile.emailVerified && profile.email.endsWith("@example.com")
      }
      return true
    },
    async redirect({ url, baseUrl }) {
      // console.log(baseUrl+"/dashboard")
      return baseUrl+"/dashboard"
    },
    async jwt({token}){
      // const user = await prisma.user.findUnique({
      //   where:{
      //     email: token.email
      //   }
      // })
      // console.log(user)
      // token.emailVerified = user.emailVerified
      return token
    },
    async session({session}){
      const user = await prisma.user.findUnique({
        where:{
          email: session.user.email
        }
      })
      if(user){
        session.user.emailVerified = user.emailVerified
        session.user.data = user.data
        if(user.data==null){
          session.user.data={}
          session.user.data.newUser= true
        }
      }
      if(typeof(session.user.data)=='undefined'){
        session.user.sentEmail = false
      }
      

      
      
      return session
    }
  },
  jwt: {
    encryption: true,
    maxAge: 60 * 60 * 24 * 30,
  },
  session: {
    // Choose how you want to save the user session.
    // The default is `"jwt"`, an encrypted JWT (JWE) in the session cookie.
    // If you use an `adapter` however, we default it to `"database"` instead.
    // You can still force a JWT session by explicitly defining `"jwt"`.
    // When using `"database"`, the session cookie will only contain a `sessionToken` value,
    // which is used to look up the session in the database.
    strategy: "jwt",
  
    // Seconds - How long until an idle session expires and is no longer valid.
    maxAge: 30 * 24 * 60 * 60, // 30 days
  
    // Seconds - Throttle how frequently to write to database to extend a session.
    // Use it to limit write operations. Set to 0 to always update the database.
    // Note: This option is ignored if using JSON Web Tokens
    updateAge: 24 * 60 * 60, // 24 hours
  }
})
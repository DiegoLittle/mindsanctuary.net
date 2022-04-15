import { signIn, useSession, getProviders, getCsrfToken } from 'next-auth/react'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { XCircleIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import Head from 'next/head'
import * as gtag from '../../lib/gtag'

/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
interface Props {
  csrfToken:string
}

export default function SignUp({ csrfToken }:Props) {
  const router = useRouter()
  const { data: session } = useSession()
  if(session){
    router.push("/dashboard")
  }
  const [name,setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error,setError] = useState()

  async function signUp(e){
    gtag.event(
      {
        action: "sign_up",
      }
    )
      e.preventDefault()
      const body = {name,email,password}
      if (password!=confirmPassword){
          setError('Passwords do not match')
      }
      else{
        console.log(process.env.HOST)
      const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/auth/signup`,{
          method:"POST",
          body:JSON.stringify(body)
      })
      const json = await res.json()
      if(json.error){
          setError(json.error)
      }
      else{
        //   Log user in/verify email
        router.push("/auth/signin?warning=Please verify your email by clicking the confirmation link in your email")
      }
    }
  }
  return (
    <>
                                    <Head>
        <title>Sign up</title>
        <meta property="og:title" content="Sign up" key="title" />
      </Head>
      {/*
          This example requires updating your template:
  
          ```
          <html class="h-full bg-gray-50">
          <body class="h-full">
          ```
        */}
      <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img
            className="mx-auto h-16 w-auto"
            src="/logo.svg"
            alt="Mind Sanctuary"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Create your acount
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or{' '}
            <Link href="/auth/signin">
            <a
              
              className="font-medium text-fountain-blue-600 hover:text-fountain-blue-500"
            >
              login to your account
            </a>
            </Link>
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">

          <p className="text-sm font-medium text-gray-700">Sign in with</p>
          <div className="mt-6 grid grid-cols-3 gap-3">
              <div className=" invisible">
                  <a
                    href="#"
                    className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
                  >
                    <span className="sr-only">Sign in with Twitter</span>
                    <svg
                      className="h-5 w-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </div>
                <div
                  onClick={() => {
                    signIn('google')
                  }}
                >
                  <a
                    href="#"
                    className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
                  >
                    <span className="sr-only">Sign in with Google</span>
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
                        <path
                          fill="#4285F4"
                          d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z"
                        />
                        <path
                          fill="#34A853"
                          d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z"
                        />
                        <path
                          fill="#FBBC05"
                          d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z"
                        />
                        <path
                          fill="#EA4335"
                          d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z"
                        />
                      </g>
                    </svg>
                  </a>
                </div>

                <div className="hidden">
                  <a
                    href="#"
                    className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
                  >
                    <span className="sr-only">Sign in with GitHub</span>
                    <svg
                      className="h-5 w-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="bg-white px-2 text-gray-500">
                    Or continue with
                  </span>
                </div>
              </div>
            {/* <form className="space-y-6" action="#" method="POST"> */}
            {error?<div className="rounded-md bg-red-50 p-4 my-4">
      <div className="flex">
        <div className="flex-shrink-0">
          <XCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true" />
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-red-800">{error}</h3>
          {/* <div className="mt-2 text-sm text-red-700">
            <ul role="list" className="list-disc pl-5 space-y-1">
              <li>Your password must be at least 8 characters</li>
              <li>Your password must include at least one pro wrestling finishing move</li>
            </ul>
          </div> */}
        </div>
      </div>
    </div>:""}
            <form
            onSubmit={signUp}
              className="space-y-6"
            //   method="post"
            //   action="/api/auth/callback/credentials"
            >
              <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <div className="mt-1">
                  <input
                    onChange={(e)=>setName(e.target.value)}
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-fountain-blue-500 focus:outline-fountain-blue-500 focus:ring-fountain-blue-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <div className="mt-1">
                  <input
                  onChange={(e)=>setEmail(e.target.value)}
                    id="username"
                    name="username"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-fountain-blue-500 focus:outline-fountain-blue-500 focus:ring-fountain-blue-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="mt-1">
                  <input
                  onChange={(e)=>setPassword(e.target.value)}
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-fountain-blue-500 focus:outline-fountain-blue-500 focus:ring-fountain-blue-500 sm:text-sm"
                  />
                </div>
              </div>

                            <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Confirm Password
                </label>
                <div className="mt-1">
                  <input
                  onChange={(e)=>setConfirmPassword(e.target.value)}
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-fountain-blue-500 focus:outline-fountain-blue-500 focus:ring-fountain-blue-500 sm:text-sm"
                  />
                </div>
              </div>


              <div>
                <button
                    // onClick={()=>{
                    //   signIn('Credentials', {
                    //       email: email,
                    //       password: password,
                    //   },
                    //   {callbackUrl:"/dashboard"}
                    //   );
                    // }}
                  type="submit"
                  className="flex w-full justify-center rounded-md border border-transparent bg-fountain-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-fountain-blue-700 focus:outline-fountain-blue-500 focus:ring-2 focus:ring-fountain-blue-500 focus:ring-offset-2"
                >
                  Sign up
                </button>
              </div>
            </form>




            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps(context) {
  return {
    props: {
      csrfToken: await getCsrfToken(context),
    },
  }
}

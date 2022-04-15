import { signIn, useSession, getProviders, getCsrfToken } from 'next-auth/react'
import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import {
  CheckCircleIcon,
  ExclamationIcon,
  XCircleIcon,
  XIcon,
} from '@heroicons/react/solid'
import { Session } from 'next-auth/core/types'
import Head from 'next/head'
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
  csrfToken: string
}

export default function SignIn({ csrfToken }: Props) {
  const router = useRouter()
  const sessionComplete = useSession()
  const session: session = sessionComplete.data
  const [error, setError] = useState(router.query.error)
  const [success, setSuccess] = useState(router.query.success)
  const [warning, setWarning] = useState(router.query.warning)
  const confirmationCode = router.query.confirmationCode
  const email = router.query.email

  if (session && session.user.emailVerified) {
    router.push('/dashboard')
  }
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  async function sendPasswordChange(e){
    e.preventDefault()
    if(password==confirmPassword){
      // Send to API route to generate password hash and store & then redirect back to login with success query
      await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/auth/password-reset`,
      {
        method:"POST",
        body:JSON.stringify({email,password,confirmationCode})
      })
      router.push(`${process.env.NEXT_PUBLIC_HOST}/auth/signin?success=Password succesfully reset. Log in below with your new password`)
    }
  }
  return (
    <div>
      <Head>
        <title>Sign in</title>
        <meta property="og:title" content="Sign in" key="title" />
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
          <Link href="/">
            <img
              className="mx-auto h-16 w-auto cursor-pointer"
              src="/logo.svg"
              alt="Workflow"
            />
          </Link>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Reset your password
          </h2>
          <h4 className="text-sm text-gray-500 text-center mt-2"></h4>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            {/* <form className="space-y-6" action="#" method="POST"> */}
            <form
            onSubmit={(e)=>{sendPasswordChange(e)}}
              className="space-y-6"
              // onSubmit={(e)=>signIn(e)}
            >
              {/* <input name="csrfToken" type="hidden" defaultValue={csrfToken} /> */}
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
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-fountain-blue-500 focus:outline-none focus:ring-fountain-blue-500 sm:text-sm"
                  />
                </div>
              </div>

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
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-fountain-blue-500 focus:outline-none focus:ring-fountain-blue-500 sm:text-sm"
                  />
                </div>

              {/* <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="mt-1">
                  <input
                    onChange={(e) => {
                      setPassword(e.target.value)
                    }}
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-fountain-blue-500 focus:outline-none focus:ring-fountain-blue-500 sm:text-sm"
                  />
                </div>
              </div> */}


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
                  className="flex w-full justify-center rounded-md border border-transparent bg-fountain-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-fountain-blue-700 focus:outline-none focus:ring-2 focus:ring-fountain-blue-500 focus:ring-offset-2"
                >
                  Reset Password
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  return {
    props: {
      csrfToken: await getCsrfToken(context),
    },
  }
}

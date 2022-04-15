import { useRouter } from 'next/router'
import React, { useState } from 'react'
import {
  CheckCircleIcon,
  ExclamationIcon,
  XCircleIcon,
  XIcon,
} from '@heroicons/react/solid'

const Unsubscribe = () => {
  const router = useRouter()
  const [success, setSuccess] = useState(router.query.success)
  // console.log(success)

  //TODO Build a survey to ask why they unsubscribed
  return (
    <div>
      {router.query.success ? (
        <div className="rounded-md bg-green-50 p-4 mx-auto w-1/2">
          <div className="flex">
            <div className="flex-shrink-0">
              <CheckCircleIcon
                className="h-5 w-5 text-green-400"
                aria-hidden="true"
              />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-green-800">
                {router.query.success}
              </p>
            </div>
            <div className="ml-auto pl-3">
              <div className="-mx-1.5 -my-1.5">
                <button
                  type="button"
                  className="inline-flex rounded-md bg-green-50 p-1.5 text-green-500 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50"
                >
                  <span className="sr-only">Dismiss</span>
                  <XIcon className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

export default Unsubscribe
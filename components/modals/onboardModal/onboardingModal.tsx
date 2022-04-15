import { Dialog, Transition } from '@headlessui/react'
import { getSession, useSession } from 'next-auth/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import styles from './onboardModal.module.css'

export default function MyModal() {
  let session = useSession()
  let [isOpen, setIsOpen] = useState(session.data.user.data.newUser)
  const [tourStep, setTourStep] = useState(0)
  const elementRef = useRef()

  const steps = [
    {
      title: 'Welcome to Mind Sanctuary',
      body: 'Mind Sanctuary is a mental health app aimed to calm your anxiety, overcome your depression, and discover more about yourself.',
    },
    {
      title: 'Psychometrics and Mental Health Questionaires',
      body: 'Take mental health questionaires and psychometric tests to gain a deeper insight into your health and mind',
    },
    {
      title:'Mood Tracker & Journal',
      body:'Track your moods on a calendar and write in a journal to find patterns in your moods and mental state over time.'
    }
  ]

  function endTour() {
    session.data.user.data.newUser = false
    fetch(`${process.env.NEXT_PUBLIC_HOST}/api/user`,{
      method:"PUT",
      body:JSON.stringify(session.data.user.data)
    })
    setIsOpen(false)
  }
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={endTour}
        >
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="my-8 inline-block w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                {steps.map((step,index) => (
                  <div className={`${styles.active}${index==tourStep?"":"active"} hidden`}>
                    <div className="flex">
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6 text-gray-900"
                      >
                        {step.title}
                      </Dialog.Title>
                    </div>

                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        {step.body}
                      </p>
                    </div>
                  </div>
                ))}

                <div className="mt-4 text-right">
                  <button
                    type="button"
                    className="inline-flex rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:outline-none"
                    onClick={() => {if(!(tourStep+1>=steps.length)){
                      setTourStep(tourStep + 1)
                    }
                    else{endTour()}
                  }}
                  >
                    Next
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

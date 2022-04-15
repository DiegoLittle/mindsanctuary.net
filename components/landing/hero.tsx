import { ChevronRightIcon } from "@heroicons/react/outline";
import Image from 'next/image'
import Link from "next/link";
import Lottie from "lottie-react";
import animationData from '../../lib/assets/LOTTIE_ANIMATIONS/SCENES/focus.json'
// import anim2 from '../../lib/assets/LOTTIE_ANIMATIONS/illustrations/Mental Health 1.json'

export default function Hero(){

    return(
        <main className="">
          <div className="pt-10 pb-14 md:pb-14 bg-fountain-blue-900 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
            <div className="mx-auto max-w-7xl lg:px-8">
              <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
                  <div className="lg:py-24">
                    {/* <a
                      href="#"
                      className="inline-flex items-center text-white bg-black rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200"
                    >
                      <span className="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full">
                        We're hiring
                      </span>
                      <span className="ml-4 text-sm">Visit our careers page</span>
                      <ChevronRightIcon className="ml-2 w-5 h-5 text-gray-500" aria-hidden="true" />
                    </a> */}
                    <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                      <span className="block">Your Mental Health</span>
                      <span className="pb-3 block bg-clip-text text-transparent bg-gradient-to-r from-fountain-blue-300 to-fountain-blue-400 sm:pb-5">
                        companion
                      </span>
                    </h1>
                    <p className="text-base text-white sm:text-xl lg:text-lg xl:text-xl">
                      Track your moods, write in a self-care journal, complete surveys to better understand your mind, and more in the all in one mental health app.
                    </p>
                    <div className="mt-10 sm:mt-12">
                      <form action="#" className="sm:max-w-xl sm:mx-auto lg:mx-0">
                        <div className="sm:flex">
                          <div className="min-w-0 flex-1">
                            {/* <label htmlFor="email" className="sr-only">
                              Email address
                            </label>
                            <input
                              id="email"
                              type="email"
                              placeholder="Enter your email"
                              className="block w-full px-4 py-3 rounded-md border-0 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900"
                            /> */}
                            <Link href="/auth/signup">
                                <button className="w-1/2 md:inline md:w-1/4 py-3 px-4 mx-2 rounded-md shadow bg-gradient-to-r from-fountain-blue-400 to-fountain-blue-500 text-white font-medium hover:from-fountain-blue-500 hover:to-fountain-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900">
                                Get Started
                            </button>

                            </Link>
                            <Link href="/demo">
                                <button className="block md:inline w-1/2 md:w-1/4 my-2 mt-4 mx-2 py-3 px-4 rounded-md shadow bg-gradient-to-r from-fountain-blue-400 to-fountain-blue-500 text-white font-medium hover:from-fountain-blue-500 hover:to-fountain-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900">
                                Try a demo
                            </button>

                            </Link>
                          </div>
                          {/* <div className="mt-3 sm:mt-0 sm:ml-3">
                            <button
                              type="submit"
                              className="block w-full py-3 px-4 rounded-md shadow bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-medium hover:from-emerald-600 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900"
                            >
                              Start free trial
                            </button>
                          </div> */}
                        </div>
                        {/* <p className="mt-3 text-sm text-gray-300 sm:mt-4">
                          Start your free 14-day trial, no credit card necessary. By providing your email, you agree to
                          our{' '}
                          <a href="#" className="font-medium text-white">
                            terms of service
                          </a>
                          .
                        </p> */}
                      </form>
                    </div>
                  </div>
                </div>
                <div className="mt-12 lg:m-0 lg:relative md:visible ">
                  <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                    {/* Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ */}
                    {/* <img
                      className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                      src="https://tailwindui.com/img/component-images/cloud-illustration-teal-cyan.svg"
                      alt=""
                    /> */}
                    <Lottie autoplay={true} loop={true} className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none" animationData={animationData}></Lottie>

                    {/* <Image src="/meditation.svg" alt="me" className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none" layout="fill" /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          </main>
    )
}
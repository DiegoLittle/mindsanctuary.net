import { CalendarIcon, InboxIcon, LightBulbIcon, SparklesIcon,ChartBarIcon } from "@heroicons/react/outline";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import Image from 'next/image'
import Link from "next/link";
import animationData from '../../lib/assets/breathingExercise.lottie.json'
import loadBreath from '../../components/exercises/loadBreathe'
import LoadBreathe from "../../components/exercises/loadBreathe";
import Lotus from "../icons/lotus";


export default function altFeatures() {
  return (
    <div className="relative pt-16 pb-8 md:pb-32 overflow-hidden">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-gray-100" />
      <div className="relative">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
            <div>
              <div>
                <span className="h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-r from-cyan-600 to-fountain-blue-600">
                  <LightBulbIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                  Take Psychometric surveys and questionaires
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  Take mental health questionaires and psychometric tests to gain a deeper insight into your health and mind
                </p>
                <div className="mt-6">
                  <Link href="/auth/signup">
                    <a
                      className="inline-flex bg-gradient-to-r from-cyan-600 to-fountain-blue-600 bg-origin-border px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-cyan-700 hover:to-fountain-blue-700"
                    >
                      Get started
                    </a>
                  </Link>
                  <Link href="/features/psychometrics">
                    <a
                      className="inline-flex mx-4 bg-gradient-to-r from-cyan-600 to-fountain-blue-600 bg-origin-border px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-cyan-700 hover:to-fountain-blue-700"
                    >
                      Learn more
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            {/* Testimonial */}
            {/* <div className="mt-8 border-t border-gray-200 pt-6">
                <blockquote>
                  <div>
                    <p className="text-base text-gray-500">
                      &ldquo;Cras velit quis eros eget rhoncus lacus ultrices sed diam. Sit orci risus aenean
                      curabitur donec aliquet. Mi venenatis in euismod ut.&rdquo;
                    </p>
                  </div>
                  <footer className="mt-3">
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0">
                        <img
                          className="h-6 w-6 rounded-full"
                          src="https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                          alt=""
                        />
                      </div>
                      <div className="text-base font-medium text-gray-700">
                        Marcia Hill, Digital Marketing Manager
                      </div>
                    </div>
                  </footer>
                </blockquote>
              </div> */}
          </div>
          <motion.div
            initial={{ opacity: 0, x: "100px" }}
            whileInView={{ opacity: 1, x: "0px" }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="mt-12 sm:mt-16 lg:mt-0 ">
            <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative  lg:h-5/6 xl:h-full">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src="/psychometrics.png"
                alt="Psychometrics"
              />
              {/* <Image className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none" src="/moodtracker.png" height={248} width={414}></Image> */}
            </div>
          </motion.div>
        </div>
      </div>
      <div className="mt-24">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
            <div>
              <div>
                <span className="h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-r from-cyan-600 to-fountain-blue-600">
                  <CalendarIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                  Track your moods
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  Track your moods on a calendar and write in a journal to find patterns in your moods and mental state over time.
                </p>
                <div className="mt-6">
                  <Link href="/auth/signup">
                    <a
                      className="inline-flex bg-gradient-to-r from-cyan-600 to-fountain-blue-600 bg-origin-border px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-cyan-700 hover:to-fountain-blue-700"
                    >
                      Get started
                    </a>
                  </Link>
                  <Link href="/features/mood-tracker">
                    <a
                      className="inline-flex mx-4 bg-gradient-to-r from-cyan-600 to-fountain-blue-600 bg-origin-border px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-cyan-700 hover:to-fountain-blue-700"
                    >
                      Learn more
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: "-100px" }}
            whileInView={{ opacity: 1, x: "0px" }}
            transition={{ duration: 1 }}
            viewport={{ once: true }} className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
            <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                src="/moodtrackerCropped.png"
                alt="Customer profile user interface"
              />
            </div>
          </motion.div>
        </div>
      </div>
      <div className="mt-24">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
            <div>
              <div>
                <span className="h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-r from-cyan-600 to-fountain-blue-600">
                  <Lotus color='stroke-white' className="h-6 w-6 text-white" aria-hidden="true" />
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                  Stress-management exercises
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  Reduce your stress, improve your mood, and relax your mind with stress-management exercises like box breathing. Click the demo to try a breathing exercise.
                </p>
                <div className="mt-6">
                  <Link href="/auth/signup">
                    <a
                      className="inline-flex bg-gradient-to-r from-cyan-600 to-fountain-blue-600 bg-origin-border px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-cyan-700 hover:to-fountain-blue-700"
                    >
                      Get started
                    </a>
                  </Link>
                  <Link href="/features/stress-management">
                    <a
                      className="inline-flex mx-4 bg-gradient-to-r from-cyan-600 to-fountain-blue-600 bg-origin-border px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-cyan-700 hover:to-fountain-blue-700"
                    >
                      Learn more
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            {/* Testimonial */}
            {/* <div className="mt-8 border-t border-gray-200 pt-6">
                <blockquote>
                  <div>
                    <p className="text-base text-gray-500">
                      &ldquo;Cras velit quis eros eget rhoncus lacus ultrices sed diam. Sit orci risus aenean
                      curabitur donec aliquet. Mi venenatis in euismod ut.&rdquo;
                    </p>
                  </div>
                  <footer className="mt-3">
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0">
                        <img
                          className="h-6 w-6 rounded-full"
                          src="https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                          alt=""
                        />
                      </div>
                      <div className="text-base font-medium text-gray-700">
                        Marcia Hill, Digital Marketing Manager
                      </div>
                    </div>
                  </footer>
                </blockquote>
              </div> */}
          </div>

          <motion.div
            initial={{ opacity: 0, x: "100px" }}
            whileInView={{ opacity: 1, x: "0px" }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="mt-12 mb-12 sm:mt-16 lg:mt-64 lg:mb-0 ">
            <div className="sm:pl-6 lg:px-0 lg:m-0 lg:relative  lg:h-5/6 xl:h-full">
              <LoadBreathe demo={true}></LoadBreathe>
              {/* <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src="/psychometrics.png"
                alt="Psychometrics"
              /> */}
              {/* <Image className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none" src="/moodtracker.png" height={248} width={414}></Image> */}
            </div>
          </motion.div>
        </div>
      <div className="sm:hidden lg:hidden w-full md:h-32 md:block"></div>
      
      </div>
      
    </div>
  )
}
import React, { createContext, useEffect, useState } from 'react'

// export const moodLogContext = createContext({
//     moodLogData: {
//       createdAt: null,
//       id: null,
//       moodvalue: null,
//       updatedAt: null,
//       userid: null,
//     },
//     setMoodLogData: (value: string) => {},
//   })

import MoodLog from '../../components/moodlog/demo/moodlog'
import 'dayjs'
import MoodsCalendar from '../../components/moodlog/demo/moodsCalendar'
import Head from 'next/head'
import dayjs from 'dayjs'
import Link from 'next/link'


const moodTrack = () => {
  const [moodLogData, setMoodLogData] = useState({
    createdAt: dayjs().format('YYYY-MM-DD'),
    id: null,
    moodvalue: null,
    updatedAt: null,
    userid: null,
  })


  return (
    <div className="py-6">
      <Head>
        <title>Mood Tracker</title>
        <meta property="og:title" content="Mood Tracker" key="title" />
      </Head>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Replace with your content */}
        <div className="py-4">
          <div className="grid h-auto sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 rounded-lg border-4 border-dashed border-gray-200">
            <div className='px-8 pb-8'>
              <div className=" pt-4 pb-2 text-2xl font-bold">
                Mood Log
              </div>

              <MoodLog moodLogData={moodLogData} setMoodLogData={setMoodLogData}></MoodLog>
            </div>
            <div className='px-8 pb-8'>
              <div className="pt-4 pb-2 text-2xl font-bold">
                Mood Calendar
              </div>
              <MoodsCalendar moodLogData={moodLogData} setMoodLogData={setMoodLogData}></MoodsCalendar>
            </div>
            <div className='p-4 lg:text-xl text-center my-auto text-lg mx-auto'>
              Login to save your results to your calendar!
              <Link href="/auth/signup">
                <button className="block mx-auto w-1/2 py-3 px-4 rounded-md shadow bg-gradient-to-r from-fountain-blue-400 to-fountain-blue-500 text-white font-medium hover:from-fountain-blue-500 hover:to-fountain-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900">
                  Sign up
                </button>

              </Link>
            </div>


            {/* <Post session={session}></Post>
                    {posts?.map((post) => (
                      <div>
                        <div>{post.title}</div>
                        <div>{post.content}</div>
                      </div>
                    ))} */}
          </div>
        </div>
        {/* /End replace */}
      </div>
    </div>
  );
}

export default moodTrack;
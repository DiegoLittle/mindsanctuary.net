import React from 'react'
import Breathe from '../../../components/exercises/loadBreathe'
import Link from 'next/link'
import Head from 'next/head'


const Exercises = () => {

  let exercisesList = [
    {
      name: "Box Breathing",
      slug: 'box-breathing',
      tags: ['Relaxation', 'Stress Relief'],
      description: "Box Breathing is a common and effective breathing technique used to relieve stress and improve your mood."
    }
  ]

  return (
    <div className='p-4'>
                  <Head>
        <title>Stress Relief Exercises</title>
        <meta property="og:title" content="Stress Relief Exercises" key="title" />
      </Head>
      {exercisesList.map((exercise) =>
      <Link href={`/dashboard/exercises/${exercise.slug}`}>
              <div
          // onClick={}
          className="mr-4 px-4 h-40 w-full md:h-52 md:w-64 cursor-pointer rounded-xl bg-white p-2 shadow-lg transition ease-in-out hover:scale-[103%]"
        >
          <div className="font-medium text-black md:text-lg">
            {exercise.name}
          </div>
          <div className="flex">
            {exercise.tags.map((tag) =>
              <div className={`my-2 inline-flex items-center rounded-full px-2 mr-1 py-0.5 text-xs font-medium text-fountain-blue-700 bg-fountain-blue-100 `}>
                <span>{tag}</span>
              </div>)}
          </div>
          <div className='text-sm mt-1 text-gray-500'>
            {exercise.description}
          </div>
          {/* <div className="w-full rounded-full bg-gray-200 dark:bg-gray-700">
            <div
              style={{ width: `${getProgress(surveyElement) + '%'}` }}
              className={`w-1.5 rounded-full bg-fountain-blue-500 text-center text-xs font-medium leading-none text-blue-100 `}
            >
              {' '}
              <span className="ml-1">{getProgress(surveyElement) + '%'}</span>
            </div>
          </div> */}
          {/* <div>{getProgress(survey) + '%'}</div> */}
        </div>
      </Link>
      )}
      {/* <Breathe></Breathe> */}
    </div>
  )
}

export default Exercises
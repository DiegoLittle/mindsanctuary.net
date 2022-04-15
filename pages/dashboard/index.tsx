/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import {
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  UsersIcon,
} from '@heroicons/react/outline'
import Link from 'next/link'
import {
  signIn,
  useSession,
  getProviders,
  getCsrfToken,
  getSession,
} from 'next-auth/react'
import Log from '../../components/log'
import MoodLog from '../../components/moodlog/moodlog'
import { isQuestionCompleted } from '../../lib/util-survey'
import { getProgress } from '../../lib/util-survey'
import Head from 'next/head'
import { Survey } from '../../components/types'
import { useRouter } from 'next/router'



export default function Dashboard() {
  const { data: session } = useSession()
  const router = useRouter()
  router.push("/dashboard/moodtrack")
  // const [posts, setPosts] = useState()
  const [surveys, setSurveys] = useState<Survey[]>()

  useEffect(() => {
    const fetchPosts = async (url, setData) => {
      // get the data from the api
      const data = await fetch(url)
      // convert data to json
      const json = await data.json()
      setData(json)
      return json
    }
    fetchPosts(`${process.env.NEXT_PUBLIC_HOST}/api/survey`, setSurveys)
  }, [])
  // console.log(session)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
                            <Head>
        <title>Dashboard</title>
        <meta property="og:title" content="Dashboard" key="title" />
      </Head>
      <div className="py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          {/* Replace with your content */}
          <div className="py-4">
            <div className="grid justify-center rounded-lg border-4 border-dashed border-gray-200 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <div className="">
                <div className="pl-4 pt-4 text-2xl font-bold">Inventories</div>
                {surveys?.map((survey) => (
                  <Link key={survey.id} href={'/survey/' + survey.id}>
                    <div className="transition ease-in-out hover:scale-[103%] m-4 h-24 w-48 cursor-pointer rounded-xl bg-white p-2 shadow-lg">
                      <span className="text-lg font-semibold text-black">
                        {survey.title}
                      </span>
                      <div className="w-full rounded-full bg-gray-200 dark:bg-gray-700">
                        <div
                        style={{width:`${getProgress(survey)+'%'}`}}
                          className={`rounded-full bg-fountain-blue-500 w-1.5 text-center text-xs font-medium leading-none text-blue-100 `}
                        >
                          {' '}
                          <span className='ml-1'>{getProgress(survey) + '%'}</span>
                        </div>
                      </div>
                      {/* <div>{getProgress(survey) + '%'}</div> */}
                    </div>
                  </Link>
                ))}
              </div>
              <div className="">
                <div className="pt-4 pb-2 text-2xl font-bold">
                  Mood Log
                </div>
                <MoodLog></MoodLog>
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

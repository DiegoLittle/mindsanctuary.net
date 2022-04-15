/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState, useEffect } from 'react'
import Link from 'next/link'
import {
  signIn,
  useSession,
  getProviders,
  getCsrfToken,
  getSession,
} from 'next-auth/react'
import Log from '../../components/log'
import MoodLog from '../../components/moodlog'
import { isQuestionCompleted } from '../../lib/util-survey'
import { getProgress } from '../../lib/util-survey'
import Head from 'next/head'
import { Survey } from '../../components/types'
import { useRouter } from 'next/router'
import Email from '../../components/admin/email/templateDisplay'
import UsersTable from '../../components/admin/usersTable'



export default function Dashboard() {
  const { data: session } = useSession()
  const router = useRouter()
  // const [posts, setPosts] = useState()
  const [surveys, setSurveys] = useState<Survey[]>()
  const [emailList,setEmailList] = useState([])
  // const [auth, setAuth] = useState()

  useEffect(() => {
    const fetchPosts = async (url, setData) => {
      // get the data from the api
      const data = await fetch(url)
      // convert data to json
      const json = await data.json()
      setData(json)
      return json
    }
    fetchPosts(`${process.env.NEXT_PUBLIC_HOST}/api/admin/users`, setEmailList)
  }, [])
  console.log(session)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta property="og:title" content="Dashboard" key="title" />
      </Head>
      <div>
        <UsersTable users={emailList}></UsersTable>
        {/* {emailList.map((user)=><div>{user.email}</div>)} */}
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

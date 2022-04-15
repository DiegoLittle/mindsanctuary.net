import React, { useEffect, useState } from 'react'
import Stats from '../../components/admin/analytics/stats'

type Props = {}

const AdminAnalytics = (props: Props) => {
    const [statistics,setStatistics] = useState()
    const [emailList,setEmailList] = useState([])

    const stats = [
        { name: 'Total Signups', stat: emailList.length, previousStat: '', change: '', changeType: 'increase' },
        { name: 'Avg. Open Rate', stat: '58.16%', previousStat: '56.14%', change: '2.02%', changeType: 'increase' },
        { name: 'Avg. Click Rate', stat: '24.57%', previousStat: '28.62%', change: '4.05%', changeType: 'decrease' },
      ]

    useEffect(() => {
        const fetchPosts = async (url, setData) => {
          // get the data from the api
          const data = await fetch(url)
          // convert data to json
          const json = await data.json()
          setData(json)
          return json
        }
        
        fetchPosts(`${process.env.NEXT_PUBLIC_HOST}/api/admin/users?dayspast=1`, setEmailList)
      }, [])


  return (
    <div>
        <Stats stats={stats}></Stats>
    </div>
  )
}

export default AdminAnalytics
import { useEffect, useState, useContext } from 'react'
import Log from '../log'
import MoodSlider from '../moodlog/moodSlider'
import * as dayjs from 'dayjs'
import { moodLogContext } from '../layouts/dashboardLayout'
import { motion } from 'framer-motion'
import Streak from './streak'
import { useSelector, useDispatch } from 'react-redux'
import { setMoodLog, selectMoodlog } from '../../store/slices/moodLogSlice'
import SymptomsTracker from './symptomsTracker'
import Tabs from './tabs'
import MedicationLog from './medication/MedicationLog'
import { BookmarkAltIcon } from '@heroicons/react/outline'
import PillsIcon from '../icons/pills'
import log from '../../lib/analytics'
import { useSession } from 'next-auth/react'


const moodlog = ({ title }) => {
  const session = useSession()
  const [currentTab, setCurrentTab] = useState(0)
  // console.log(moodLog)
  const { moodLogData, setMoodLogData } = useContext(moodLogContext)
  // const  = useState()
  const [saving, setSaving] = useState(false)
  const moodLogRedux = useSelector(selectMoodlog)
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchPosts = async (url) => {
      // get the data from the api
      const data = await fetch(url)
      // convert data to json
      const json = await data.json()
      // console.log(json)
      var mostRecentDate = new Date(Math.max.apply(null, json.map(e => {
        return new Date(e.createdAt);
      })));
      var mostRecentObject = json.filter(e => {
        var d = new Date(e.createdAt);
        return d.getTime() == mostRecentDate.getTime();
      })[0];
      const blogDate = dayjs(mostRecentObject.createdAt).format("MM/DD/YYYY")
      const today = dayjs().format("MM/DD/YYYY")
      if (blogDate != today) {
        //   Post Blog and return result
        // const body = {};
        const newPost = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/moodlog`, {
          method: "POST",
          // body:JSON.stringify(body)
        })
        const json = await newPost.json()
        setMoodLogData(json)
      }
      else {
        dispatch(setMoodLog(mostRecentObject))
        // setData(mostRecentObject)
      }
      return json
    }
    fetchPosts(`${process.env.NEXT_PUBLIC_HOST}/api/moodlog`)
  }, [])
  useEffect(async () => {
    if (moodLogRedux.id) {
      await fetch("/api/moodlog", {
        method: "PUT",
        body: JSON.stringify(moodLogRedux)
      })
      setSaving(false)
    }
    console.log(moodLogRedux)
  }, [moodLogRedux])
  return (
    <div>
      {typeof (moodLogRedux) != 'undefined' ? <div>
        <div className='flex mb-2'>
          <div className=" pt-4 p-2 text-2xl ">
            {title}
          </div>
          <Streak moodlog={moodLogRedux}></Streak>
        </div>
        <div className='flex'>
          <button className={`flex p-1 m-2 border rounded-lg shadow-sm text-sm ${(currentTab == 0) && 'bg-gray-100'}`} onClick={() => setCurrentTab(0)}>
            <BookmarkAltIcon className='h-5 w-5 text-fountain-blue-500 group-hover:text-gray-500 mr-1'>
            </BookmarkAltIcon> 
            <span className='font-semibold'>Mood Journal</span>
            
            </button>
          <button className={`flex p-1 m-2 border rounded-lg shadow-sm text-sm ${(currentTab == 1) && 'bg-gray-100'}`} onClick={() => {
            setCurrentTab(1)
            log.event({
              event_name:"medlog_nav",
              email: session.data.user.email
            })}
            }>
            <PillsIcon className='my-auto h-4 w-4 stroke-fountain-blue-500 group-hover:text-gray-500  mr-1'>
            </PillsIcon>
            <span className='font-semibold'>Medication Log</span>
            </button>
        </div>
        {currentTab == 0 &&
          <div>
            <Log moodlog={moodLogRedux}></Log>
            <MoodSlider setSaving={setSaving}></MoodSlider>
            <SymptomsTracker></SymptomsTracker>
          </div>
        }
        {currentTab == 1 &&
          <div>
            <MedicationLog></MedicationLog>
          </div>
        }
        {/* <div>{saving?"Saving Moodlog":"Moodlog saved"}</div> */}
      </div> : ""
      }
    </div>
  )
}

export default moodlog

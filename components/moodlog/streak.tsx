import dayjs from 'dayjs'
import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setMoodLog,selectMoodlog } from '../../store/slices/moodLogSlice'

type Props = {
    complete: Boolean,
    currentStreak: number,
    moodlog:any
}

const Streak = (props: Props) => {
  const moodLogRedux = useSelector(selectMoodlog)
  const dispatch = useDispatch()
    const [moods,setMoods] = useState([])
    const [streak,setStreak] = useState()

    function sortByDates(array){
        return array.sort((a, b) => 
          dayjs(a.createdAt).isAfter(dayjs(b.createdAt)) ? 1 : -1
        //   console.log(dayjs(b.createdAt).diff(a.createdAt,'m'))
        //   dayjs(b.createdAt).diff(a.createdAt,'m')
          )
    }
    function getStreak(dates){
        let sortedActivities = sortByDates(dates)
        let streak=0;

        for (let index = sortedActivities.length-1; index >0; index--) {
            let currentDay = sortedActivities[index].createdAt
            let previousDay = sortedActivities[index-1].createdAt
            // If moodlog is on the same day ignore
            if(!(dayjs(currentDay).date()==dayjs(previousDay).date())){
              let day = dayjs(sortedActivities[index].createdAt)
              let distance = day.diff(sortedActivities[index-1].createdAt,'day')
              if(distance<=1 && (sortedActivities[index-1].moodvalue!=null)){
                  streak +=1
              }
              else{
                  console.log(streak)
                  return streak
              }

            }
            else{
              console.log("today",sortedActivities[index].createdAt)
              console.log("previous day",sortedActivities[index-1].createdAt)
            }
            // let previousDay = dayjs(sortedActivities[index-1].createdAt)

          }
        return streak
    }
    useEffect(() => {
        const fetchPosts = async (url, setData) => {
          // get the data from the api
          const data = await fetch(url)
          // convert data to json
          const json = await data.json()
          // const blogDate = dayjs(json[json.length-1].createdAt).format("MM/DD/YYYY")
    
          // setDays(days)
          setData(json)

        //   console.log(json)
        //   json.sort()
          setStreak(getStreak(json))

          
          return json
        }
        fetchPosts(`${process.env.NEXT_PUBLIC_HOST}/api/moodlog`, setMoods)
      }, [])
    
  return (
    <div className='flex ml-auto'>
      <div className='my-auto text-right mr-2 lg:mr-4 font-medium'>Current Streak</div>
                  <svg
            viewBox="0 0 100 100"
            width={50}
            height={50}
            className='block relative ml-auto my-auto lg:my-0 text-right p-2 h-16 w-16 rounded-xl border'
            style={{
              // position: "",
            //   transform: "rotate(-90deg)",
              overflow: "visible",
              // marginLeft: -
            }}
          >
                  <text className="text-4xl font-bold" x="50%" y="50%" text-anchor="middle" stroke-width="2px" dy=".3em">{(moodLogRedux.moodvalue!=null)?streak+1:streak}</text>

              {/* <text className='absolute m-auto text-center font-bold text-xl' style={{
                  transform:"rotate(90deg)",
              }}>5</text> */}
          <motion.circle
              cx="50"
              cy="50"
              r={50}
              strokeWidth={6}
            //   "#2d2dff"
            // #2d2dff"
            // #6AA9C7 Fountain-blue-500
            // d1d5db
            stroke={`${(props.moodlog.moodvalue!=null)?"#6AA9C7":"#d1d5db"}`}
              fill="transparent"
              strokeDashoffset={0}
              strokeDasharray={Math.ceil(2 * Math.PI * 50)}
              // variants={variants}
              initial="hidden"
              // animate={inView ? "show" : "hidden"}
            />
            </svg>
    </div>
  )
}

export default Streak
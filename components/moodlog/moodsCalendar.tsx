/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useContext, useEffect, useState } from 'react'
import {
  CalendarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  DotsHorizontalIcon,
  LocationMarkerIcon,
} from '@heroicons/react/solid'
import { Menu, Transition } from '@headlessui/react'
import dayjs from 'dayjs'
import { moodLogContext } from '../layouts/dashboardLayout'
import { Moodlog } from '../types'
import { useSelector, useDispatch } from 'react-redux'
import { setMoodLog,selectMoodlog } from '../../store/slices/moodLogSlice'

var months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function MoodsCalendar() {
  const {moodLogData,setMoodLogData} = useContext(moodLogContext)
  const [yearMonth,setYearMonth] = useState(dayjs().format('YYYY-MM'))
  const [days, setDays] = useState([])
  const [moods, setMoods] = useState([])
  const moodLogRedux = useSelector(selectMoodlog)
  const dispatch = useDispatch()

  // console.log(moodLogRedux)

  interface Day {
    date:string
    mood:{}
  }
  function getCalendarDays(yearMonth){
    var days= []
    // console.log(dayjs().format('YYYY-MM'))
    var firstDay = dayjs(yearMonth+'-1').day()
    // console.log(firstDay)
    var daysInMonth= dayjs(yearMonth).daysInMonth()
    // console.log("dats in month",daysInMonth)
    var nextMonth = dayjs(yearMonth).add(1,'month').format('YYYY-MM')
    var previousMonth = dayjs(yearMonth).subtract(1,'month').format('YYYY-MM')
    for (let  i= firstDay-1;  i>= 0; i--) {
        let day = {}
        day.date = dayjs(previousMonth+`-${dayjs(previousMonth).daysInMonth()-i}`).format("YYYY-MM-DD")
        days.push(day)
      }
      for (let  i= 1;  i<= daysInMonth-1; i++) {
        let day = {}
        day.date = dayjs(yearMonth+`-${i}`).format("YYYY-MM-DD")
    
        days.push(day)
      }
      for (let  i= 0;  i<= 41-days.length+i; i++) {
        let day = {}
        day.date = dayjs(nextMonth+`-${i}`).format("YYYY-MM-DD")
    
        days.push(day)
      }
      return days
  }  
  
// 42 days

  useEffect(() => {
    setDays(getCalendarDays(yearMonth))
  }, [yearMonth])
  useEffect(() => {
    const fetchPosts = async (url, setData) => {
      // get the data from the api
      const data = await fetch(url)
      // convert data to json
      const json:Moodlog[] = await data.json()
      console.log(json)
      // const blogDate = dayjs(json[json.length-1].createdAt).format("MM/DD/YYYY")
      // Loop through moods and format the date
      var moodsData = json.forEach((mood, index) => {
        json[index].createdAt = dayjs(mood.createdAt).format('YYYY-MM-DD')
      })
      // Loop through moods and append to corresponding day by filtering days
      // Loop through days
      days.forEach((day, index) => {
        var mood = json.filter((mood) => {
          return day.date == mood.createdAt
        })
        days[index].mood = mood[0]
        // setDays(days)
      })

      // setDays(days)
      setData(json)
      return json
    }
    fetchPosts(`${process.env.NEXT_PUBLIC_HOST}/api/moodlog`, setMoods)
  }, [days])
  useEffect(()=>{
    days.forEach((day, index) => {
      if(day.date == moodLogRedux.createdAt){
        days[index].mood = moodLogRedux
      }
      // days[index].mood = mood[0]
      // setDays(days)
    })

    console.log(moodLogRedux)
    console.log(days)
  },[moodLogRedux])
  //
  function getMoodEmoji(moodValue) {
    switch (moodValue) {
      case 0:
        return '😣'
      case 1:
        return '😢'
      case 2:
        return '😔'
      case 3:
        return '🙁'
      case 4:
        return '😐'
      case 5:
        return '🙂'
      case 6:
        return '😀'
      case 7:
        return '😄'
      case 8:
        return '😁'
        break

      default:
        break
    }
  }

  return (
    //   <div className="lg:grid lg:grid-cols-12 lg:gap-x-16">
    <div className="mt-10 text-center lg:col-start-8 lg:col-end-13 lg:row-start-1 lg:mt-0 xl:col-start-9">
      <div className="flex items-center text-gray-900">
        <button
          onClick={() => setYearMonth(dayjs(yearMonth).subtract(1,'month').format('YYYY-MM'))}
          type="button"
          className="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
        >
          <span className="sr-only">Previous month</span>
          <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
        </button>
        <div className="flex-auto font-semibold">{months[dayjs(yearMonth).month()] +` ${dayjs(yearMonth).year()}`}</div>
        <button
          onClick={() => setYearMonth(dayjs(yearMonth).add(1,'month').format('YYYY-MM'))}
          type="button"
          className="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
        >
          <span className="sr-only">Next month</span>
          <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>
      <div className="mt-6 grid grid-cols-7 text-xs leading-6 text-gray-500">
        <div>S</div>
        <div>M</div>
        <div>T</div>
        <div>W</div>
        <div>T</div>
        <div>F</div>
        <div>S</div>
      </div>
      {typeof moodLogRedux != 'undefined'?
      <div className="isolate mt-2 grid grid-cols-7 gap-px rounded-lg bg-gray-200 text-sm shadow ring-1 ring-gray-200">
        {days.map((day, dayIdx) => (
          <button
            onClick={() => {
              if(day.mood){
                dispatch(setMoodLog(day.mood))
                // setMoodLogData(day.mood)
              }
            }}
            key={day.date}
            type="button"
            className={classNames(
              'py-1.5 hover:bg-gray-100 focus:z-10',
              dayjs(day.date).month() == dayjs(yearMonth).month()
                ? 'bg-white'
                : 'bg-gray-50',
              dayjs(moodLogRedux.createdAt).format("YYYY-MM-DD")===day.date
              ?"border border-fountain-blue-600"
              :"",
              (day.isSelected || day.isToday) && 'font-semibold',
              day.isSelected && 'text-white',
              !day.isSelected &&
                dayjs(day.date).month() == dayjs(yearMonth).month() &&
                !dayjs(day.date).format('YYYY-MM-DD') ==
                  dayjs().format('YYYY-MM-DD') &&
                'text-gray-900',
              !day.isSelected &&
                !(dayjs(day.date).month() == dayjs(yearMonth).month()) &&
                !dayjs(day.date).format('YYYY-MM-DD') ==
                  dayjs().format('YYYY-MM-DD') &&
                'text-gray-400',
              dayjs(day.date).format('YYYY-MM-DD') ==
                dayjs().format('YYYY-MM-DD') &&
                !day.isSelected &&
                'text-fountain-blue-600',
              dayIdx === 0 && 'rounded-tl-lg',
              dayIdx === 6 && 'rounded-tr-lg',
              dayIdx === days.length - 7 && 'rounded-bl-lg',
              dayIdx === days.length - 1 && 'rounded-br-lg'
            )}
          >
            {/* {day.date} */}
            
            {(typeof day.mood != 'undefined') && !(dayjs(moodLogRedux.createdAt).format("YYYY-MM-DD")===day.date&&getMoodEmoji(moodLogRedux.moodvalue)) ? (
              <div className="text-2xl">{getMoodEmoji(day.mood.moodvalue)}</div>
            ) : (
              ''
            )}
            {(dayjs(moodLogRedux.createdAt).format("YYYY-MM-DD")===day.date&&getMoodEmoji(moodLogRedux.moodvalue))&&<div className="text-2xl">{getMoodEmoji(moodLogRedux.moodvalue)}</div>

            }
            
            <time
              dateTime={day.date}
              className={classNames(
                'mx-auto flex h-7 w-7 items-center justify-center rounded-full',
                day.isSelected && day.isToday && 'bg-fountain-blue-600',
                day.isSelected && !day.isToday && 'bg-gray-900'
              )}
            >
              {day.date.split('-').pop().replace(/^0/, '')}
            </time>
          </button>
        ))}
      </div>
      :""}
      {/* {days.map((day)=><div key={day.date}>{day.date}</div>)} */}
      {/* <button
        type="button"
        className="mt-8 w-full rounded-md border border-transparent bg-fountain-blue-600 py-2 px-4 text-sm font-medium text-white shadow hover:bg-fountain-blue-700 focus:outline-none focus:ring-2 focus:ring-fountain-blue-500 focus:ring-offset-2"
      >
        Add event
      </button> */}
    </div>
    //   </div>
  )
}

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
import { moodLogContext } from '../components/layouts/dashboardLayout'

const meetings = [
  {
    id: 1,
    date: 'January 10th, 2022',
    time: '5:00 PM',
    datetime: '2022-01-10T17:00',
    name: 'Leslie Alexander',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    location: 'Starbucks',
  },
  // More meetings...
]
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
const january = [
  { date: '2021-12-26' },
  { date: '2021-12-27' },
  { date: '2021-12-28' },
  { date: '2021-12-29' },
  { date: '2021-12-30' },
  { date: '2021-12-31' },
  { date: '2022-01-01', isCurrentMonth: true },
  { date: '2022-01-02', isCurrentMonth: true },
  { date: '2022-01-03', isCurrentMonth: true },
  { date: '2022-01-04', isCurrentMonth: true },
  { date: '2022-01-05', isCurrentMonth: true },
  { date: '2022-01-06', isCurrentMonth: true },
  { date: '2022-01-07', isCurrentMonth: true },
  { date: '2022-01-08', isCurrentMonth: true },
  { date: '2022-01-09', isCurrentMonth: true },
  { date: '2022-01-10', isCurrentMonth: true },
  { date: '2022-01-11', isCurrentMonth: true },
  { date: '2022-01-12', isCurrentMonth: true, isToday: true },
  { date: '2022-01-13', isCurrentMonth: true },
  { date: '2022-01-14', isCurrentMonth: true },
  { date: '2022-01-15', isCurrentMonth: true },
  { date: '2022-01-16', isCurrentMonth: true },
  { date: '2022-01-17', isCurrentMonth: true },
  { date: '2022-01-18', isCurrentMonth: true },
  { date: '2022-01-19', isCurrentMonth: true },
  { date: '2022-01-20', isCurrentMonth: true },
  { date: '2022-01-21', isCurrentMonth: true },
  { date: '2022-01-22', isCurrentMonth: true, isSelected: true },
  { date: '2022-01-23', isCurrentMonth: true },
  { date: '2022-01-24', isCurrentMonth: true },
  { date: '2022-01-25', isCurrentMonth: true },
  { date: '2022-01-26', isCurrentMonth: true },
  { date: '2022-01-27', isCurrentMonth: true },
  { date: '2022-01-28', isCurrentMonth: true },
  { date: '2022-01-29', isCurrentMonth: true },
  { date: '2022-01-30', isCurrentMonth: true },
  { date: '2022-01-31', isCurrentMonth: true },
  { date: '2022-02-01' },
  { date: '2022-02-02' },
  { date: '2022-02-03' },
  { date: '2022-02-04' },
  { date: '2022-02-05' },
]
const febuary = [
  { date: '2022-01-30', isCurrentMonth: true },
  { date: '2022-01-31', isCurrentMonth: true },
  { date: '2022-2-1' },
  { date: '2022-2-2' },
  { date: '2022-2-3' },
  { date: '2022-2-4' },
  { date: '2022-2-5' },
  { date: '2022-2-6' },
  { date: '2022-2-7' },
  { date: '2022-2-8' },
  { date: '2022-2-9' },
  { date: '2022-2-10' },
  { date: '2022-2-11' },
  { date: '2022-2-12' },
  { date: '2022-2-13' },
  { date: '2022-2-14' },
  { date: '2022-2-15' },
  { date: '2022-2-16' },
  { date: '2022-2-17' },
  { date: '2022-2-18' },
  { date: '2022-2-19' },
  { date: '2022-2-20' },
  { date: '2022-2-21' },
  { date: '2022-2-22' },
  { date: '2022-2-23' },
  { date: '2022-2-24' },
  { date: '2022-2-25' },
  { date: '2022-2-26' },
  { date: '2022-2-27' },
  { date: '2022-2-28' },
  { date: '2022-3-1' },
  { date: '2022-3-2' },
  { date: '2022-3-3' },
  { date: '2022-3-4' },
  { date: '2022-3-5' },
  { date: '2022-3-6' },
  { date: '2022-3-7' },
  { date: '2022-3-8' },
  { date: '2022-3-9' },
  { date: '2022-3-10' },
  { date: '2022-3-11' },
  { date: '2022-3-12' },
]
const march = [
  { date: '2022-2-27' },
  { date: '2022-2-28' },
  { date: '2022-3-1' },
  { date: '2022-3-2' },
  { date: '2022-3-3' },
  { date: '2022-3-4' },
  { date: '2022-3-5' },
  { date: '2022-3-6' },
  { date: '2022-3-7' },
  { date: '2022-3-8' },
  { date: '2022-3-9' },
  { date: '2022-3-10' },
  { date: '2022-3-11' },
  { date: '2022-3-12' },
  { date: '2022-3-13' },
  { date: '2022-3-14' },
  { date: '2022-3-15' },
  { date: '2022-3-16' },
  { date: '2022-3-17' },
  { date: '2022-3-18' },
  { date: '2022-3-19' },
  { date: '2022-3-20' },
  { date: '2022-3-21' },
  { date: '2022-3-22' },
  { date: '2022-3-23' },
  { date: '2022-3-24' },
  { date: '2022-3-25' },
  { date: '2022-3-26' },
  { date: '2022-3-27' },
  { date: '2022-3-28' },
  { date: '2022-3-29' },
  { date: '2022-3-30' },
  { date: '2022-3-31' },
  { date: '2022-4-1' },
  { date: '2022-4-2' },
  { date: '2022-4-3' },
  { date: '2022-4-4' },
  { date: '2022-4-5' },
  { date: '2022-4-6' },
  { date: '2022-4-7' },
  { date: '2022-4-8' },
  { date: '2022-4-9' },
]
const april = [
  { date: '2022-3-27' },
  { date: '2022-3-28' },
  { date: '2022-3-29' },
  { date: '2022-3-30' },
  { date: '2022-3-31' },
  { date: '2022-4-1' },
  { date: '2022-4-2' },
  { date: '2022-4-3' },
  { date: '2022-4-4' },
  { date: '2022-4-5' },
  { date: '2022-4-6' },
  { date: '2022-4-7' },
  { date: '2022-4-8' },
  { date: '2022-4-9' },
  { date: '2022-4-10' },
  { date: '2022-4-11' },
  { date: '2022-4-12' },
  { date: '2022-4-13' },
  { date: '2022-4-14' },
  { date: '2022-4-15' },
  { date: '2022-4-16' },
  { date: '2022-4-17' },
  { date: '2022-4-18' },
  { date: '2022-4-19' },
  { date: '2022-4-20' },
  { date: '2022-4-21' },
  { date: '2022-4-22' },
  { date: '2022-4-23' },
  { date: '2022-4-24' },
  { date: '2022-4-25' },
  { date: '2022-4-26' },
  { date: '2022-4-27' },
  { date: '2022-4-28' },
  { date: '2022-4-29' },
  { date: '2022-4-30' },
  { date: '2022-5-1' },
  { date: '2022-5-2' },
  { date: '2022-5-3' },
  { date: '2022-5-4' },
  { date: '2022-5-5' },
  { date: '2022-5-6' },
  { date: '2022-5-7' },
]
const may = [
  { date: '2022-5-1' },
  { date: '2022-5-2' },
  { date: '2022-5-3' },
  { date: '2022-5-4' },
  { date: '2022-5-5' },
  { date: '2022-5-6' },
  { date: '2022-5-7' },
  { date: '2022-5-8' },
  { date: '2022-5-9' },
  { date: '2022-5-10' },
  { date: '2022-5-11' },
  { date: '2022-5-12' },
  { date: '2022-5-13' },
  { date: '2022-5-14' },
  { date: '2022-5-15' },
  { date: '2022-5-16' },
  { date: '2022-5-17' },
  { date: '2022-5-18' },
  { date: '2022-5-19' },
  { date: '2022-5-20' },
  { date: '2022-5-21' },
  { date: '2022-5-22' },
  { date: '2022-5-23' },
  { date: '2022-5-24' },
  { date: '2022-5-25' },
  { date: '2022-5-26' },
  { date: '2022-5-27' },
  { date: '2022-5-28' },
  { date: '2022-5-29' },
  { date: '2022-5-30' },
  { date: '2022-5-31' },
  { date: '2022-6-1' },
  { date: '2022-6-2' },
  { date: '2022-6-3' },
  { date: '2022-6-4' },
  { date: '2022-6-5' },
  { date: '2022-6-6' },
  { date: '2022-6-7' },
  { date: '2022-6-8' },
  { date: '2022-6-9' },
  { date: '2022-6-10' },
  { date: '2022-6-11' },
]
const june = [
  { date: '2022-5-29' },
  { date: '2022-5-30' },
  { date: '2022-5-31' },
  { date: '2022-6-1' },
  { date: '2022-6-2' },
  { date: '2022-6-3' },
  { date: '2022-6-4' },
  { date: '2022-6-5' },
  { date: '2022-6-6' },
  { date: '2022-6-7' },
  { date: '2022-6-8' },
  { date: '2022-6-9' },
  { date: '2022-6-10' },
  { date: '2022-6-11' },
  { date: '2022-6-12' },
  { date: '2022-6-13' },
  { date: '2022-6-14' },
  { date: '2022-6-15' },
  { date: '2022-6-16' },
  { date: '2022-6-17' },
  { date: '2022-6-18' },
  { date: '2022-6-19' },
  { date: '2022-6-20' },
  { date: '2022-6-21' },
  { date: '2022-6-22' },
  { date: '2022-6-23' },
  { date: '2022-6-24' },
  { date: '2022-6-25' },
  { date: '2022-6-26' },
  { date: '2022-6-27' },
  { date: '2022-6-28' },
  { date: '2022-6-29' },
  { date: '2022-6-30' },
  { date: '2022-7-1' },
  { date: '2022-7-2' },
  { date: '2022-7-3' },
  { date: '2022-7-4' },
  { date: '2022-7-5' },
  { date: '2022-7-6' },
  { date: '2022-7-7' },
  { date: '2022-7-8' },
  { date: '2022-7-9' },
]
const july = [
  { date: '2022-6-26' },
  { date: '2022-6-27' },
  { date: '2022-6-28' },
  { date: '2022-6-29' },
  { date: '2022-6-30' },
  { date: '2022-7-1' },
  { date: '2022-7-2' },
  { date: '2022-7-3' },
  { date: '2022-7-4' },
  { date: '2022-7-5' },
  { date: '2022-7-6' },
  { date: '2022-7-7' },
  { date: '2022-7-8' },
  { date: '2022-7-9' },
  { date: '2022-7-10' },
  { date: '2022-7-11' },
  { date: '2022-7-12' },
  { date: '2022-7-13' },
  { date: '2022-7-14' },
  { date: '2022-7-15' },
  { date: '2022-7-16' },
  { date: '2022-7-17' },
  { date: '2022-7-18' },
  { date: '2022-7-19' },
  { date: '2022-7-20' },
  { date: '2022-7-21' },
  { date: '2022-7-22' },
  { date: '2022-7-23' },
  { date: '2022-7-24' },
  { date: '2022-7-25' },
  { date: '2022-7-26' },
  { date: '2022-7-27' },
  { date: '2022-7-28' },
  { date: '2022-7-29' },
  { date: '2022-7-30' },
  { date: '2022-7-31' },
  { date: '2022-8-1' },
  { date: '2022-8-2' },
  { date: '2022-8-3' },
  { date: '2022-8-4' },
  { date: '2022-8-5' },
  { date: '2022-8-6' },
]

const august = [
  { date: '2022-7-31' },
  { date: '2022-8-1' },
  { date: '2022-8-2' },
  { date: '2022-8-3' },
  { date: '2022-8-4' },
  { date: '2022-8-5' },
  { date: '2022-8-6' },
  { date: '2022-8-7' },
  { date: '2022-8-8' },
  { date: '2022-8-9' },
  { date: '2022-8-10' },
  { date: '2022-8-11' },
  { date: '2022-8-12' },
  { date: '2022-8-13' },
  { date: '2022-8-14' },
  { date: '2022-8-15' },
  { date: '2022-8-16' },
  { date: '2022-8-17' },
  { date: '2022-8-18' },
  { date: '2022-8-19' },
  { date: '2022-8-20' },
  { date: '2022-8-21' },
  { date: '2022-8-22' },
  { date: '2022-8-23' },
  { date: '2022-8-24' },
  { date: '2022-8-25' },
  { date: '2022-8-26' },
  { date: '2022-8-27' },
  { date: '2022-8-28' },
  { date: '2022-8-29' },
  { date: '2022-8-30' },
  { date: '2022-8-31' },
  { date: '2022-9-1' },
  { date: '2022-9-2' },
  { date: '2022-9-3' },
  { date: '2022-9-4' },
  { date: '2022-9-5' },
  { date: '2022-9-6' },
  { date: '2022-9-7' },
  { date: '2022-9-8' },
  { date: '2022-9-9' },
  { date: '2022-9-10' },
]
const september = [
  { date: '2022-8-28' },
  { date: '2022-8-29' },
  { date: '2022-8-30' },
  { date: '2022-8-31' },
  { date: '2022-9-1' },
  { date: '2022-9-2' },
  { date: '2022-9-3' },
  { date: '2022-9-4' },
  { date: '2022-9-5' },
  { date: '2022-9-6' },
  { date: '2022-9-7' },
  { date: '2022-9-8' },
  { date: '2022-9-9' },
  { date: '2022-9-10' },
  { date: '2022-9-11' },
  { date: '2022-9-12' },
  { date: '2022-9-13' },
  { date: '2022-9-14' },
  { date: '2022-9-15' },
  { date: '2022-9-16' },
  { date: '2022-9-17' },
  { date: '2022-9-18' },
  { date: '2022-9-19' },
  { date: '2022-9-20' },
  { date: '2022-9-21' },
  { date: '2022-9-22' },
  { date: '2022-9-23' },
  { date: '2022-9-24' },
  { date: '2022-9-25' },
  { date: '2022-9-26' },
  { date: '2022-9-27' },
  { date: '2022-9-28' },
  { date: '2022-9-29' },
  { date: '2022-9-30' },
  { date: '2022-10-1' },
  { date: '2022-10-2' },
  { date: '2022-10-3' },
  { date: '2022-10-4' },
  { date: '2022-10-5' },
  { date: '2022-10-6' },
  { date: '2022-10-7' },
  { date: '2022-10-8' },
]
const october = [
  { date: '2022-9-25' },
  { date: '2022-9-26' },
  { date: '2022-9-27' },
  { date: '2022-9-28' },
  { date: '2022-9-29' },
  { date: '2022-9-30' },
  { date: '2022-10-1' },
  { date: '2022-10-2' },
  { date: '2022-10-3' },
  { date: '2022-10-4' },
  { date: '2022-10-5' },
  { date: '2022-10-6' },
  { date: '2022-10-7' },
  { date: '2022-10-8' },
  { date: '2022-10-9' },
  { date: '2022-10-10' },
  { date: '2022-10-11' },
  { date: '2022-10-12' },
  { date: '2022-10-13' },
  { date: '2022-10-14' },
  { date: '2022-10-15' },
  { date: '2022-10-16' },
  { date: '2022-10-17' },
  { date: '2022-10-18' },
  { date: '2022-10-19' },
  { date: '2022-10-20' },
  { date: '2022-10-21' },
  { date: '2022-10-22' },
  { date: '2022-10-23' },
  { date: '2022-10-24' },
  { date: '2022-10-25' },
  { date: '2022-10-26' },
  { date: '2022-10-27' },
  { date: '2022-10-28' },
  { date: '2022-10-29' },
  { date: '2022-10-30' },
  { date: '2022-10-31' },
  { date: '2022-11-1' },
  { date: '2022-11-2' },
  { date: '2022-11-3' },
  { date: '2022-11-4' },
  { date: '2022-11-5' },
]
const november = [
  { date: '2022-10-30' },
  { date: '2022-10-31' },
  { date: '2022-11-1' },
  { date: '2022-11-2' },
  { date: '2022-11-3' },
  { date: '2022-11-4' },
  { date: '2022-11-5' },
  { date: '2022-11-6' },
  { date: '2022-11-7' },
  { date: '2022-11-8' },
  { date: '2022-11-9' },
  { date: '2022-11-10' },
  { date: '2022-11-11' },
  { date: '2022-11-12' },
  { date: '2022-11-13' },
  { date: '2022-11-14' },
  { date: '2022-11-15' },
  { date: '2022-11-16' },
  { date: '2022-11-17' },
  { date: '2022-11-18' },
  { date: '2022-11-19' },
  { date: '2022-11-20' },
  { date: '2022-11-21' },
  { date: '2022-11-22' },
  { date: '2022-11-23' },
  { date: '2022-11-24' },
  { date: '2022-11-25' },
  { date: '2022-11-26' },
  { date: '2022-11-27' },
  { date: '2022-11-28' },
  { date: '2022-11-29' },
  { date: '2022-11-30' },
  { date: '2022-12-1' },
  { date: '2022-12-2' },
  { date: '2022-12-3' },
  { date: '2022-12-4' },
  { date: '2022-12-5' },
  { date: '2022-12-6' },
  { date: '2022-12-7' },
  { date: '2022-12-8' },
  { date: '2022-12-9' },
  { date: '2022-12-10' },
]
const december = [
  { date: '2022-11-27' },
  { date: '2022-11-28' },
  { date: '2022-11-29' },
  { date: '2022-11-30' },
  { date: '2022-12-1' },
  { date: '2022-12-2' },
  { date: '2022-12-3' },
  { date: '2022-12-4' },
  { date: '2022-12-5' },
  { date: '2022-12-6' },
  { date: '2022-12-7' },
  { date: '2022-12-8' },
  { date: '2022-12-9' },
  { date: '2022-12-10' },
  { date: '2022-12-11' },
  { date: '2022-12-12' },
  { date: '2022-12-13' },
  { date: '2022-12-14' },
  { date: '2022-12-15' },
  { date: '2022-12-16' },
  { date: '2022-12-17' },
  { date: '2022-12-18' },
  { date: '2022-12-19' },
  { date: '2022-12-20' },
  { date: '2022-12-21' },
  { date: '2022-12-22' },
  { date: '2022-12-23' },
  { date: '2022-12-24' },
  { date: '2022-12-25' },
  { date: '2022-12-26' },
  { date: '2022-12-27' },
  { date: '2022-12-28' },
  { date: '2022-12-29' },
  { date: '2022-12-30' },
  { date: '2022-12-31' },
  { date: '2023-1-1' },
  { date: '2023-1-2' },
  { date: '2023-1-3' },
  { date: '2023-1-4' },
  { date: '2023-1-5' },
  { date: '2023-1-6' },
  { date: '2023-1-7' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const {moodLogData,setMoodLogData} = useContext(moodLogContext)
  const [currentMonth, setCurrentMonth] = useState(dayjs().month())
  const [days, setDays] = useState([])
  const [moods, setMoods] = useState([])

  useEffect(() => {
    switch (currentMonth) {
      case 0:
        setDays(january)
        break
      case 1:
        setDays(febuary)
        break
      case 2:
        setDays(march)
        break
      case 3:
        setDays(april)
        break
      case 4:
        setDays(may)
        break
      case 5:
        setDays(june)
        break
      case 6:
        setDays(july)
        break
      case 7:
        setDays(august)
        break
      case 8:
        setDays(september)
        break
      case 9:
        setDays(october)
        break
      case 10:
        setDays(november)
        break
      case 11:
        setDays(december)
        break
      default:
        break
    }
  }, [currentMonth])
  useEffect(() => {
    const fetchPosts = async (url, setData) => {
      // get the data from the api
      const data = await fetch(url)
      // convert data to json
      const json = await data.json()
      // const blogDate = dayjs(json[json.length-1].createdAt).format("MM/DD/YYYY")
      var moodsData = json.forEach((mood, index) => {
        json[index].createdAt = dayjs(mood.createdAt).format('YYYY-M-DD')
      })
      // Loop through moods and append to corresponding day by filtering days
      days.forEach((day, index) => {
        var mood = json.filter((mood) => {
          return day.date == mood.createdAt
        })
        
        days[index].mood = mood[0]
        setDays(days)
      })

      // setDays(days)
      setData(json)
      return json
    }
    fetchPosts(`${process.env.NEXT_PUBLIC_HOST}/api/moodlog`, setMoods)
  }, [days])
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
    <div className="mt-10 text-center lg:col-start-8 lg:col-end-13 lg:row-start-1 lg:mt-9 xl:col-start-9">
      <div className="flex items-center text-gray-900">
        <button
          onClick={() => setCurrentMonth(currentMonth - 1)}
          type="button"
          className="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
        >
          <span className="sr-only">Previous month</span>
          <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
        </button>
        <div className="flex-auto font-semibold">{months[currentMonth]}</div>
        <button
          onClick={() => setCurrentMonth(currentMonth + 1)}
          type="button"
          className="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
        >
          <span className="sr-only">Next month</span>
          <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>
      <div className="mt-6 grid grid-cols-7 text-xs leading-6 text-gray-500">
        <div>M</div>
        <div>T</div>
        <div>W</div>
        <div>T</div>
        <div>F</div>
        <div>S</div>
        <div>S</div>
      </div>
      {typeof moodLogData != 'undefined'?
      <div className="isolate mt-2 grid grid-cols-7 gap-px rounded-lg bg-gray-200 text-sm shadow ring-1 ring-gray-200">
        {days.map((day, dayIdx) => (
          <button
            onClick={() => {
              if(day.mood){
                setMoodLogData(day.mood)
              }
            }}
            key={day.date}
            type="button"
            className={classNames(
              'py-1.5 hover:bg-gray-100 focus:z-10',
              dayjs(day.date).month() == currentMonth
                ? 'bg-white'
                : 'bg-gray-50',
              dayjs(moodLogData.createdAt).format("YYYY-M-DD")===day.date
              ?"border border-fountain-blue-600"
              :"",
              (day.isSelected || day.isToday) && 'font-semibold',
              day.isSelected && 'text-white',
              !day.isSelected &&
                dayjs(day.date).month() == currentMonth &&
                !dayjs(day.date).format('YYYY-M-DD') ==
                  dayjs().format('YYYY-M-DD') &&
                'text-gray-900',
              !day.isSelected &&
                !(dayjs(day.date).month() == currentMonth) &&
                !dayjs(day.date).format('YYYY-M-DD') ==
                  dayjs().format('YYYY-M-DD') &&
                'text-gray-400',
              dayjs(day.date).format('YYYY-M-DD') ==
                dayjs().format('YYYY-M-DD') &&
                !day.isSelected &&
                'text-fountain-blue-600',
              dayIdx === 0 && 'rounded-tl-lg',
              dayIdx === 6 && 'rounded-tr-lg',
              dayIdx === days.length - 7 && 'rounded-bl-lg',
              dayIdx === days.length - 1 && 'rounded-br-lg'
            )}
          >
            {/* {day.date} */}
            {typeof day.mood != 'undefined' ? (
              <div className="text-2xl">{getMoodEmoji(day.mood.moodvalue)}</div>
            ) : (
              ''
            )}
            
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

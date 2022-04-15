import MoodLog from '../../components/moodlog/moodlog'
import 'dayjs'
import * as dayjs from 'dayjs';
import { createContext, useMemo, useState } from 'react';
import MoodsCalendar from '../../components/moodlog/moodsCalendar'
import Head from 'next/head'
import Quote from '../../components/moodlog/quote'


const moodTrack = ({demo}) => {
  var months= [
    "January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"
  ]
  var days = [
    "Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"
  ]


  const [time, setTime] = useState();

  return (
    <div className="py-6">
      <Head>
        <title>Mood Tracker</title>
        <meta property="og:title" content="Mood Tracker" key="title" />
      </Head>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
      <div className='text-2xl px-2 font-semibold'>
                  {days[dayjs().day()]+", " +months[dayjs().month()]+" "+dayjs().date()+ ", " + dayjs().year()}
        </div>
        {/* <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1> */}
        {/* <Quote></Quote> */}
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Replace with your content */}
        <div className="py-4">
          <div className="grid h-auto sm:grid-cols-1 lg:grid-cols-2 rounded-lg">
            <div className='pb-8'>

              <MoodLog title={"Mood Log"}></MoodLog>
            </div>
            <div className='px-8 pb-8'>
              <div className="pt-4 pb-2 text-2xl">
                Mood Calendar
              </div>
              <MoodsCalendar></MoodsCalendar>
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
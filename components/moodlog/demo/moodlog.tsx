import { useEffect, useState,useContext } from 'react'
import Log from '../../log_old'
import MoodSlider from './moodSlider'
import * as dayjs from 'dayjs'
// import { moodLogContext } from '../../../pages/demo/index'


const moodlog = ({moodLogData,setMoodLogData}) => {
    // const {moodLogData,setMoodLogData} = useContext(moodLogContext)
    // console.log(moodLogData)
    // const  = useState()
    var months= [
      "January", "February", "March", "April", "May", "June", "July",
      "August", "September", "October", "November", "December"
    ]

  useEffect(() => {
    const fetchPosts = async (url, setData) => {
      // get the data from the api
      const data = await fetch(url)
      // convert data to json
      const json = await data.json()
      // console.log(json)
      var mostRecentDate = new Date(Math.max.apply(null, json.map( e => {
        return new Date(e.createdAt);
     })));
      var mostRecentObject = json.filter( e => { 
          var d = new Date( e.createdAt ); 
          return d.getTime() == mostRecentDate.getTime();
      })[0];
      const blogDate = dayjs(mostRecentObject.createdAt).format("MM/DD/YYYY")
      const today = dayjs().format("MM/DD/YYYY")
      if (blogDate!=today){
        //   Post Blog and return result
        // const body = {};
        // const newPost = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/moodlog`,{
        //     method:"POST",
        //     // body:JSON.stringify(body)
        // })
        // const json = await newPost.json()
        setMoodLogData(json)
      }
      else{
          setData(mostRecentObject)
      }
      return json
    }
    // fetchPosts(`${process.env.NEXT_PUBLIC_HOST}/api/moodlog`, setMoodLogData)
  }, [])
//   useEffect(()=>{
//     console.log(moodLog[0])
// },[moodLog])
  return (
    <div>
        {typeof(moodLogData)!='undefined'?<div>
        <div>
                  {months[dayjs().month()]+" "+dayjs().date()+ " " + dayjs().year()}
        </div>
        
        <Log moodlog={moodLogData}></Log>
      <MoodSlider moodlog={moodLogData} setMoodLogData={setMoodLogData}></MoodSlider></div>:""}
    </div>
  )
}

export default moodlog

import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import styles from './moodSlider.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { setMoodvalue,selectMoodlog } from '../../store/slices/moodLogSlice'

export default function post({setSaving}) {
  const moodlog = useSelector(selectMoodlog)
  const dispatch = useDispatch()

  const [moodValue, setMoodValue] = useState(()=>{
    if (moodlog.moodvalue==null){
      return 4
    }
    else {
      return moodlog.moodvalue
    }
  })
  // const [authorEmail,setAuthorEmail] = useState("")
  useEffect(()=>{
    setMoodValue(moodlog.moodvalue)
},[moodlog])
  
  async function updateMood(value:number) {
    setSaving(true)
    setMoodValue(value)
    dispatch(setMoodvalue(value))
    // setMoodLog(moodlog=>{
    //   moodlog.moovalue = value
    //   return moodlog
    // })
    // const body = { title:moodlog.title, description:moodlog.description,id:moodlog.id,moodvalue:value }
    
    // e.preventDefault()
    fetch(`${process.env.NEXT_PUBLIC_HOST}/api/moodlog`,{
      method:"PUT",
      body:JSON.stringify(moodlog)
  })
  }
  function getMoodEmoji(moodValue):string{
    switch (moodValue) {
      case 0:
        return("😣")
      case 1:
        return("😢")
      case 2:
        return("😔")
      case 3:
        return("🙁")
      case 4:
        return("😐")
      case 5:
        return("🙂")
      case 6:
        return("😀")
      case 7:
        return("😄")
      case 8:
        return("😁")
        break;
    
      default:
        return("😐")
        break;
    }
  }

  return (
    <div className="relative p-2">
      <label htmlFor="customRange3" className="form-label inline-block mb-1">
        I feel...
      </label>
      <input
      value={moodValue}
        onChange={(e) => {
          updateMood(parseInt(e.target.value))
        }}
        type="range"
        className={styles.slider +" slider"}
        min="0"
        max="8"
        step="1"
        id="customRange3"
      />
      {/* <span>I feel </span> */}
         <span className='block text-center text-5xl justify-center w-full'>{getMoodEmoji(moodValue)}</span>
    </div>
    
  )
}

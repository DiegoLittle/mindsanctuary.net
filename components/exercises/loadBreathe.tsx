import { motion } from 'framer-motion'
import React, { useState } from 'react'
import styles from './boxbreathe.module.css'
import Breathe from './BoxBreathe'


const LoadBreathe = ({demo}) => {
  const [startBreathing, setStartBreathing] = useState(false)
  

  return (
    <div className={`relative w-full ${demo?'md:h-1/2 md:mb-48':'md:h-screen'} h-[520px] overflow-visible`}>
      {startBreathing ? <Breathe demo={demo}></Breathe> :
        <motion.div
          // onAnimationStart={startAnimation}
          initial={{ opacity: 0, scale: .5, x: "-50%", y: "-50%" }}
          animate={{opacity:1}}
          transition={{duration:.75}}
          className={styles.allCircles}>
          {/* 100px */}
          {/* 400px max -> 50% circle is 200px w/100px radius so margin is 100/400 */}
          {/* <div className='absolute w-[50%] h-[50%]  bg-fountain-blue-700 rounded-full z-30 ml-[25%] mt-[25%]'>
      
                </div> */}



          <div onClick={() => {
            setStartBreathing(true)

          }} className='cursor-pointer absolute  w-[100%] h-[100%] bg-fountain-blue-700 hover:bg-fountain-blue-800 rounded-full'>
            <div className={styles.centerText}>
            {demo&& "Click to try demo \n"}
            <br></br>
              Begin 2 Minute Breathing Exercise
            </div>
          </div>

        </motion.div>}
    </div>
  )
}

export default LoadBreathe
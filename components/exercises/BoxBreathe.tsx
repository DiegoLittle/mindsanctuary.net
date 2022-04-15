import React, { useEffect, useState } from 'react'
import styles from './boxbreathe.module.css'
import { motion } from "framer-motion"
import useWindowDimensions from '../../lib/hooks/useWindowDimensions'
import CompletedModal from './completedExerciseModal'
import { useRouter } from 'next/router'


const Breathe = ({demo}) => {
  const router = useRouter()
  const { height, width } = useWindowDimensions();
  let instructions = ["Breathe in", "Hold your breath", "Exhale","Hold your breath"]
  const [instructionIndex, setInstructionIndex] = useState(0)
  const [timeLeft, setTimeLeft] = useState(4)
  const [totalTime, setTotalTime] = useState(0)
  let [openModal, setOpenModal] = useState(true)



  useEffect(() => {
    const interval = setInterval(() => {
      setTotalTime(totalTime=>{
        if(totalTime>=120){
          setOpenModal(true)
        }
        return(totalTime+1)
      })
      setTimeLeft(timeLeft => {
        setInstructionIndex(instructionIndex => {
          if (timeLeft - 1 == 0) {
            if (instructionIndex == 3) {
              return 0
            }
            else {
              return instructionIndex + 1
            }
          }
          else {
            return instructionIndex
          }
        })
        if (timeLeft - 1 == 0) {

          return 4
        }
        else {
          return (timeLeft - 1)
        }
      })
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  // async function startAnimation(){
  //     console.log(timeLeft)
  //     await delay(1000);
  //     setTimeLeft(timeLeft-1)    

  //   async function delay(ms) {
  //     // return await for better async stack trace support in case of errors.
  //     return await new Promise(resolve => setTimeout(resolve, ms));
  //   }
  // }
  // setInterval(()=>{
  //       if(timeLeft>0){
  //         setTimeLeft(timeLeft-1)
  //       }
  //       else if(timeLeft==0){
  //         setTimeLeft(4)
  //       }
  //     },1000)


  return (
    <div className={`relative w-full ${demo?'md:h-1/2':'md:h-screen'} h-[520px]`} >
      {/* {totalTime} */}
      {/* <h1 className='animate-fadeOut'>Test</h1> */}
      {totalTime>=120?
      <motion.div 
      initial={{ opacity: 1, scale: .5, x: "-50%", y: "-50%" }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
      // initial={{ opacity: 1, scale: 2, x: "-50%", y: "-50%" }}
      className={styles.modal}>
        <div className='flex flex-col h-full md:h-auto lg:h-full scale-75 md:scale-75 lg:scale-50 rounded-xl shadow-lg'>
          <div className='text-4xl md:text-5xl text-center font-semibold p-2 px-4 md:px-2'>Breathing Exercise Completed</div>
          <div className='mx-auto lg:mt-32 md:h-64 md:w-64 h-48 w-48 mt-8'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><g fill="#263238"><path d="M59 11.5h-4c-.28 0-.5-.23-.5-.5 0-.28.22-.5.5-.5h4c.27 0 .5.22.5.5 0 .27-.23.5-.5.5Z"></path><path d="M54 5.5h-4c-.28 0-.5-.23-.5-.5 0-.28.22-.5.5-.5h4c.27 0 .5.22.5.5 0 .27-.23.5-.5.5Z"></path><path d="M52 7.5c-.28 0-.5-.23-.5-.5V3c0-.28.22-.5.5-.5 .27 0 .5.22.5.5v4c0 .27-.23.5-.5.5Z"></path><path d="M57 13.5c-.28 0-.5-.23-.5-.5V9c0-.28.22-.5.5-.5 .27 0 .5.22.5.5v4c0 .27-.23.5-.5.5Z"></path><path d="M7 57.5H5c-.28 0-.5-.23-.5-.5 0-.28.22-.5.5-.5h2c.27 0 .5.22.5.5 0 .27-.23.5-.5.5Z"></path><path d="M19 57.5H9c-.28 0-.5-.23-.5-.5 0-.28.22-.5.5-.5h10c.27 0 .5.22.5.5 0 .27-.23.5-.5.5Z"></path><path d="M55 57.5h-2c-.28 0-.5-.23-.5-.5 0-.28.22-.5.5-.5h2c.27 0 .5.22.5.5 0 .27-.23.5-.5.5Z"></path><path d="M51 57.5H41c-.28 0-.5-.23-.5-.5 0-.28.22-.5.5-.5h10c.27 0 .5.22.5.5 0 .27-.23.5-.5.5Z"></path><path d="M38 61.5c-.28 0-.5-.23-.5-.5v-9c0-.28.22-.5.5-.5 .27 0 .5.22.5.5v9c0 .27-.23.5-.5.5Z"></path><path d="M22 61.5c-.28 0-.5-.23-.5-.5l-.01-14.96 -3.07-2.71c-4.41-3.89-6.94-9.5-6.94-15.372v-1.98c0-11.304 9.19-20.5 20.5-20.5 11.3 0 20.5 9.196 20.5 20.5v1.33l4.58 6.41c.65.91.74 2.11.22 3.11s-1.54 1.62-2.67 1.62h-2.15v6c0 4.41-3.59 8-8 8h-11.5c-.28 0-.5-.23-.5-.5 0-.28.22-.5.5-.5h11.5c3.85 0 7-3.14 7-7v-6.5c0-.28.22-.5.5-.5h2.64c.76 0 1.42-.41 1.77-1.09 .35-.68.29-1.46-.16-2.08l-4.677-6.55c-.07-.09-.1-.19-.1-.3v-1.5c0-10.752-8.75-19.5-19.5-19.5 -10.76 0-19.5 8.74-19.5 19.5v1.97c0 5.59 2.4 10.922 6.599 14.62l3.23 2.85c.1.09.16.23.16.375l0 15.17c0 .27-.23.5-.5.5Z"></path></g><path fill="#FFD740" d="M37.53 24c0 5.523-5.5 10-5.5 10s-5.5-4.477-5.5-10 5.5-10 5.5-10 5.5 4.477 5.5 10Z"></path><g fill="#263238"><path d="M32.03 34.5c-.12 0-.23-.04-.32-.12 -.24-.19-5.69-4.692-5.69-10.39 0-5.7 5.45-10.199 5.68-10.388 .18-.15.44-.15.63 0 .23.18 5.68 4.69 5.68 10.388 0 5.69-5.46 10.19-5.69 10.38 -.1.07-.21.11-.32.11Zm0-19.836c-1.15 1.03-5 4.872-5 9.33 0 4.46 3.85 8.29 5 9.33 1.14-1.04 5-4.872 5-9.34 0-4.47-3.86-8.297-5-9.336Z"></path><path d="M32 34.624h-2c-5.79 0-10.5-4.71-10.5-10.5v-2c0-.28.22-.5.5-.5h2c5.79 0 10.5 4.71 10.5 10.5v2c0 .27-.23.5-.5.5Zm-11.5-12v1.5c0 5.23 4.26 9.5 9.5 9.5h1.5v-1.5c0-5.24-4.27-9.5-9.5-9.5h-1.5Z"></path><path d="M34 34.624h-2c-.28 0-.5-.23-.5-.5v-2c0-5.79 4.71-10.5 10.5-10.5h2c.27 0 .5.22.5.5v2c0 5.79-4.71 10.5-10.5 10.5Zm-1.5-1H34c5.23 0 9.5-4.27 9.5-9.5v-1.5H42c-5.24 0-9.5 4.26-9.5 9.5v1.5Z"></path></g></svg>
          </div>
          <button
                  type="button"
                  className="justify-center w-3/4 md:my-16 mx-auto my-auto align-middle h-24 text-4xl rounded-md border border-transparent shadow-sm px-4 py-2 bg-fountain-blue-600 font-medium text-white hover:bg-fountain-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-fountain-blue-500"
                  onClick={() => {
                    router.back()
                  }}
                >
                  <span className='my-auto'>Go back to dashboard</span>
                </button>
          </div>
      </motion.div>:
      // <CompletedModal  setIsOpen={setOpenModal} isOpen={openModal}></CompletedModal>:
        <motion.div
          // onAnimationStart={startAnimation}
          initial={{ opacity: 1, scale: .5, x: "-50%", y: "-50%" }}
          animate={{ opacity: [1, .75, .75, 1,1], scale: [.5, 1, 1, .5,.5] }}
          transition={{
            duration: 16,
            repeat: Infinity,
            times: [0, .25, .50, .75,1],
            ease: [0, 0.1, 0.83, 0.67]
          }} className={styles.allCircles}>
          {/* 100px */}
          {/* 400px max -> 50% circle is 200px w/100px radius so margin is 100/400 */}
          <div className='absolute w-[50%] h-[50%]  bg-fountain-blue-700 rounded-full z-30 ml-[25%] mt-[25%]'>
            <div className={styles.centerText}>
              {instructions[instructionIndex]} for {timeLeft} seconds
            </div>
          </div>
          {/* 400px max -> 50% circle is 300px so 400-300=100/2 = 50/400 = 12.5*/}
          {/*       400- 268 */}
          <div className='absolute w-[67%] h-[67%]  bg-fountain-blue-600 rounded-full z-20 ml-[16.5%] mt-[16.5%]'></div>
          {/*  */}
          <div className='absolute w-[83%] h-[83%]  bg-fountain-blue-500 rounded-full z-10 ml-[8.5%] mt-[8.5%]'></div>


          <div className='absolute  w-[100%] h-[100%] bg-fountain-blue-400 rounded-full'></div>

        </motion.div>     
      }

      <div className={styles.circle1 + ''}>
        <div className={styles.circle2}>
          <div className={styles.circle3 + ''}>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Breathe
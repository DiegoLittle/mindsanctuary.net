import { ArrowLeftIcon } from '@heroicons/react/solid'
import React from 'react'
import styles from './backbutton.module.css'
const backbutton = ({onClick,message}) => {
  return (
    <button
    className={styles.button}
    onClick={onClick}
  >
    <ArrowLeftIcon className={styles.arrow}></ArrowLeftIcon>
    {message}
    
  </button>
  )
}

export default backbutton
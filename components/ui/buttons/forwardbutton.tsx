import {ArrowRightIcon } from '@heroicons/react/solid'
import React from 'react'
import styles from './forwardbutton.module.css'
const forwardbutton = ({onClick,message}) => {
  return (
    <button
    className={styles.button}
    onClick={onClick}
  >
    
    {message}
    <ArrowRightIcon className={styles.arrow}></ArrowRightIcon>
    
  </button>
  )
}

export default forwardbutton
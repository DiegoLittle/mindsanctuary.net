import React from 'react'
import styles from './wheel.module.scss'
let emotions = ["anger", "fear", "sadness", "happiness", "disgust", "hope", "love", "hate", "contempt", "guilt", "compassion", "shame", "gratefulness", "envy", "disappointment", "jealousy"]

const wheel = () => {
  return (
    <div className={styles.wrap}>
      {emotions.map((emotion)=>
      <div>
        <span>{emotion}</span>
      </div>)}
    </div>
  )
}

export default wheel

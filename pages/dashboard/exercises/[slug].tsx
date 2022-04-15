import React from 'react'

const LoadExercise = () => {
  return (
    <div>Exercise</div>
  )
}

export function getServerSideProps(ctx){

    return({
        props:{
            exercise: ctx.params.slug
        }
    })
}

export default LoadExercise
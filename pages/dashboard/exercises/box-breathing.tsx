import React from 'react'
import Breathe from '../../../components/exercises/loadBreathe'
import Head from 'next/head'

type Props = {}

const BoxBreathing = (props: Props) => {
  return (
    <div>
            <Head>
        <title>Box Breathing Exercise</title>
        <meta property="og:title" content="Box Breathing Exercise" key="title" />
      </Head>
        <Breathe></Breathe>
    </div>
  )
}

export default BoxBreathing
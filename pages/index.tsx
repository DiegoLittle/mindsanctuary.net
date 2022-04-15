import Header from '../components/landing/header'
import Hero from '../components/landing/hero'
import Features from '../components/landing/features'
import AltFeatures from '../components/landing/altfeatures'
import Head from 'next/head'

export default function Main() {
  return (
    <div>
      <Head>
        <title>Mind Sanctuary</title>
        <meta property="og:title" content="Mind Sanctuary" key="title" />
      </Head>
      {/* <Header></Header> */}
      <Hero></Hero>
      <AltFeatures></AltFeatures>
    </div>
  )
}

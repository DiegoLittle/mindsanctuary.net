import React from 'react'
import Link from 'next/link'

type Props = {}

const Card = ({title,slug,description})=>{
    return(
        <Link href={`${process.env.NEXT_PUBLIC_HOST}/library/${slug}`}>
        <div className="inline-flex  w-1/2 h-1/2 mx-4 cursor-pointer">
            <h1 className="text-xl lg:text-4xl my-4 hover:bg-gray-50 rounded-xl p-2 shadow-sm">{title}</h1>
            <div className="md:flex">
                <p className=" font-normal text-base text-gray-600">{description}</p>
            </div>
        </div>
    </Link>
    )
}

const Library = (props: Props) => {
  return (
    <div className='xl:mx-64 lg:mx-32 md:mx-8 mx-2 md:block'>
            <div className="text-center mb-8">
                <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">The Mind Sanctuary Library</h2>
                <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">Read all about, psychology, mental health, self-care, and more on at Mind Sanctuary Library</p>
                </div>
            <Card title="Mood" slug="/mood"></Card>
            <Card title="Mood Disorders" slug="/mood"></Card>
            {/* <Link href="/mood-disorders">Mood Disorders</Link> */}
    </div>
  )
}

export default Library
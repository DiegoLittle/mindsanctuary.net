import React, { useEffect, useState } from 'react'

const Quote = () => {
    const [quote,setQuote] = useState("")
    // let tags = [education,friendship","future","happiness","inspirational","life","literature","love","nature","success","wisdom"]
    useEffect(() => {
        const fetchPosts = async (url, setData) => {
          // get the data from the api
          const data = await fetch(url)
          // convert data to json
          const json = await data.json()
          console.log(json)
          setData(json)

          // json.forEach((quote)=>{
          //   console.log(quote.name)
          // })
          return json
        }
        fetchPosts(`https://api.quotable.io/random?tags=education|future|happiness|inspirational|life|love|nature|success`, setQuote)
      }, [])

  return (
    <div className='border-b border-gray-300 p-2'>
        <span className='text-lg'>"{quote.content}"</span><div className='font-semibold'> - {quote.author}</div>
    </div>
  )
}



export default Quote
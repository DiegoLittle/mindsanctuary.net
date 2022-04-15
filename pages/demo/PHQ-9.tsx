import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const PHQ9 = () => {
    const [survey, setSurvey] = useState()
    const router = useRouter()

    async function createSurveyResponse(survey) {

        let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/survey`, {
          method: 'POST',
          body: JSON.stringify(survey),
        })
        let json = await res.json()
        router.push(`${process.env.NEXT_PUBLIC_HOST}/survey/${json.id}`)
      }

    useEffect(() => {
        const fetchPosts = async (url, setData) => {
            // get the data from the api
            const data = await fetch(url)
            // convert data to json
            const json = await data.json()
            setData(json)
            console.log(json)
            return json
        }
        fetchPosts(`${process.env.NEXT_PUBLIC_HOST}/api/survey?title=PHQ-9`, setSurvey)
    }, [])

    
    return (
        <div className="mx-16">
            <h1 className="text-4xl">PHQ-9</h1>
            <div>PHQ-9 is a 9 question test to evaluate if you have depression</div>
            
            <button onClick={()=>createSurveyResponse(survey)} className="block md:inline w-1/2 md:w-1/4 my-2 mx-2 py-3 px-4 rounded-md shadow bg-gradient-to-r from-fountain-blue-400 to-fountain-blue-500 text-white font-medium hover:from-fountain-blue-500 hover:to-fountain-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900">
                        Begin Test
            </button>
        </div>
    )
}

export default PHQ9
import { getCsrfToken, getSession, useSession } from 'next-auth/react'
import Question from '../../components/surveys/question'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { ArrowRightIcon, ArrowLeftIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import { isQuestionCompleted } from '../../lib/util-survey'
import Backbutton from '../../components/ui/buttons/backbutton'
import Head from 'next/head'
import log from '../../lib/analytics'


export default function Inventory() {
  const router = useRouter()
  const [survey, setSurvey] = useState()
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const { sid } = router.query
  const { data: session } = useSession()
  useEffect(() => {
    const fetchData = async (url, setData) => {
      // get the data from the api
      const data = await fetch(url)
      // convert data to json
      const json = await data.json()
      setData(json)
      console.log(json)
      return json
    }
    fetchData(`${process.env.NEXT_PUBLIC_HOST}/api/survey/` + sid, setSurvey).then((data)=>{
      log.event({
        event_name:"loaded_survey",
        user_id: data.respondentid
      })
    })
  }, [])


  return (
    <div>
      {typeof (survey) != 'undefined' ? (
        <Head>
          <title>{survey.survey.title}</title>
          <meta property="og:title" content={survey.survey.title} key="title" />
        </Head>
      ) : ""

      }
      <div onClick={() => { router.back() }} className=''>
        <Backbutton message="Return to dashboard"></Backbutton>
      </div>
      <div className='grid grid-cols-1 md:flex '>
        <div className="mt-12 grid justify-center border md:w-1/2 ml-auto">

          {typeof (survey) != 'undefined' ? (
            <div>
              <div>
                <h1 className="text-2xl text-center pt-4">{survey.survey.title}</h1>
              </div>
              <Question survey={survey} currentQuestion={currentQuestion} setCurrentQuestion={setCurrentQuestion}></Question>

            </div>
          ) : (
            <div>Loading</div>
          )}
        </div>
        <div className="mt-12 grid justify-center border md:w-1/6 sm:mx-auto md:mx-0 md:mr-auto">

          {typeof (survey) != 'undefined' ? (
            <div>
              <div>
                <h1 className="text-2xl text-center">{"Survey Navigation"}</h1>
              </div>
              <div className='grid grid-cols-3 justify-center mx-auto px-auto text-center'>
                {survey.questions.map((question, index) =>
                  <div className={`cursor-pointer rounded-xl ${currentQuestion == index ? "bg-fountain-blue-400" : "hover:bg-fountain-blue-100"} ${!(currentQuestion == index) && (!isQuestionCompleted(question)) ? "bg-red-100" : ""}`} onClick={() => { setCurrentQuestion(index) }}>
                    {index + 1}
                  </div>)}
              </div>
              {/* <Question survey={survey} currentQuestion={currentQuestion} setCurrentQuestion={setCurrentQuestion}></Question> */}
            </div>
          ) : (
            <div>Loading</div>
          )}
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  return {
    props: {
      // csrfToken: getCsrfToken(),
      // data:
    },
  }
}

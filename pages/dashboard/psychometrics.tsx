import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import BigFiveResults from '../../components/psychometrics/BigFiveResults'
import { Survey, SurveyResponse } from '../../components/types'
import { monthDayYear } from '../../lib/util'
import { getProgress } from '../../lib/util-survey'
import { ArrowRightIcon } from '@heroicons/react/solid'

const testResults = () => {
  const [surveys, setSurveys] = useState()
  const [surveyResponses, setSurveyResponses] = useState()
  const router = useRouter()

  const [hoverLearnMore,setHoverLearnMore] = useState(false)

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
    fetchPosts(`${process.env.NEXT_PUBLIC_HOST}/api/survey`, setSurveys)
    fetchPosts(
      `${process.env.NEXT_PUBLIC_HOST}/api/survey/responses`,
      setSurveyResponses
    )
  }, [])
  function getCompletedSurveys(surveys) {
    return surveys?.filter((survey: Survey) => {
      return survey.results != null
    })
  }
  function getDiagnosticSurveys(surveys) {
    return surveys?.filter((survey: Survey) => {
      return survey.results != null && (survey.survey.type == "Depression" || survey.survey.type == "Anxiety")
    })
  }
  function getPersonalitySurveys(surveys) {
    return surveys?.filter((survey: Survey) => {
      return survey.results != null && (survey.survey.type == "Personality")
    })
  }
  async function createSurveyResponse(survey: Survey) {
    let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/survey`, {
      method: 'POST',
      body: JSON.stringify(survey),
    })
    let json = await res.json()
    router.push(`${process.env.NEXT_PUBLIC_HOST}/survey/${json.id}`)
  }
  function getCurrentResponses(responses) {
    return responses.filter((response) => {
      return response.isComplete == false
    })
  }
  function getAvailableTests(surveys, surveyResponses) {
    let arr = [...surveys]
    let incompleteResponses: [] = getCurrentResponses(surveyResponses)
    incompleteResponses.forEach((response) => {
      surveys.forEach((survey, index) => {
        if (response.survey.id == survey.id) {
          arr[index] = response
          console.log("Available Tests", arr)
        }
      })
    })
    return arr
  }


  return (
    <>
      <Head>
        <title>Psychometrics</title>
        <meta property="og:title" content="Psychometrics" key="title" />
      </Head>
      <div className="py-6">
        {/* Available Tests */}

        <div>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
            <h1 className="text-2xl font-semibold text-gray-900">
              Available Tests
            </h1>
          </div>
          {surveyResponses && surveys ?
            <div className="flex px-4 sm:px-6 md:px-8">
              {getAvailableTests(surveys, surveyResponses).map((surveyElement) =>
                <div>
                  {/* If string then render surveyResponse else render Survey */}
                  {typeof (surveyElement.id) == 'string' ?
                    <Link key={surveyElement.id} href={'/survey/' + surveyElement.id}>
                      <div
                        // onClick={}
                        className="mr-4 h-32 w-40 cursor-pointer rounded-xl bg-white p-2 shadow-lg transition ease-in-out hover:scale-[103%] md:w-48"
                      >
                        <div className=" font-medium text-black md:text-lg">
                          {surveyElement.survey.title}
                        </div>
                        <div className="flex">

                          {surveyElement.survey.type ? (
                            <div className={`my-2 inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${surveyElement.survey.type == "Depression" ? 'text-blue-800 bg-blue-100 ' : 'text-yellow-800 bg-yellow-100'}`}>
                              <span>{surveyElement.survey.type}</span>
                            </div>
                          ) : (
                            ''
                          )}

                          {surveyElement.survey.estimatedTime ? (
                            <div className="my-2 inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-normal text-gray-500">
                              {surveyElement.survey.estimatedTime}
                            </div>
                          ) : (
                            ''
                          )}
                        </div>
                        <div className="w-full rounded-full bg-gray-200 dark:bg-gray-700">
                          <div
                            style={{ width: `${getProgress(surveyElement) + '%'}` }}
                            className={`w-1.5 rounded-full bg-fountain-blue-500 text-center text-xs font-medium leading-none text-blue-100 `}
                          >
                            {' '}
                            <span className="ml-1">{getProgress(surveyElement) + '%'}</span>
                          </div>
                        </div>
                        {/* <div>{getProgress(survey) + '%'}</div> */}
                      </div>
                    </Link>
                    : <div
                      onClick={() => {
                        if(!hoverLearnMore){
                          console.log(hoverLearnMore)
                          createSurveyResponse(surveyElement)
                        }
                      }
                      }
                      className="mr-4 h-32 w-40 cursor-pointer  rounded-xl bg-white p-2 shadow-lg transition ease-in-out hover:scale-[103%] md:w-48 md:h-40"
                    >
                      <div className=" font-medium text-black md:text-lg">
                        {surveyElement.title}
                      </div>
                      <div className="flex flex-col">
                        {surveyElement.type ? (
                          <div className="mt-2 inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                            <span>{surveyElement.type}</span>
                          </div>
                        ) : (
                          ''
                        )}
                        <a href={surveyElement.url} target="_blank" onMouseEnter={()=>{
                          setHoverLearnMore(true)}} onMouseLeave={()=>setHoverLearnMore(false)} className='group mt-1 mb-2 inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium hover:bg-gray-100'>
                          <div>Learn more <ArrowRightIcon className='inline w-4 h-4 group-hover:translate-x-1 transition'></ArrowRightIcon> </div>
                        </a>
                        {surveyElement.estimatedTime ? (
                          <div className="my-2 inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-normal text-gray-500">
                            {surveyElement.estimatedTime}
                          </div>
                        ) : (
                          ''
                        )}
                      </div>
                      <div className="w-full rounded-full bg-gray-200 dark:bg-gray-700">
                        <div
                          style={{ width: `${getProgress(surveyElement) + '%'}` }}
                          className={`w-1.5 rounded-full bg-fountain-blue-500 text-center text-xs font-medium leading-none text-blue-100 `}
                        >
                          {' '}
                          <span className="ml-1">{getProgress(surveyElement) + '%'}</span>
                        </div>
                      </div>
                      {/* <div>{getProgress(survey) + '%'}</div> */}
                    </div>}
                </div>
              )}
            </div>
            : ""}
        </div>
        {/* My current Tests */}
        {surveyResponses ?
          <div>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 py-2">
              <h1 className="text-2xl font-semibold text-gray-900">
                My current Tests
              </h1>
            </div>
            <div className="flex px-4 sm:px-6 md:px-8 ">
              {getCurrentResponses(surveyResponses)?.map((surveyResponse: SurveyResponse) => (
                <Link key={surveyResponse.id} href={'/survey/' + surveyResponse.id}>
                  <div
                    // onClick={}
                    className="h-auto w-40 cursor-pointer  rounded-xl bg-white p-2 shadow-lg transition ease-in-out hover:scale-[103%] md:w-48"
                  >
                    <div className=" font-medium text-black md:text-lg">
                      {surveyResponse.survey.title}
                    </div>
                    <div className="flex">
                      {surveyResponse.survey.type ? (
                        <div className={`my-2 inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${surveyResponse.survey.type == "Depression" ? 'text-blue-800 bg-blue-100 ' : 'text-yellow-800 bg-yellow-100'}`}>
                          <span>{surveyResponse.survey.type}</span>
                        </div>
                      ) : (
                        ''
                      )}
                      {surveyResponse.survey.estimatedTime ? (
                        <div className="my-2 inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-normal text-gray-500">
                          {surveyResponse.survey.estimatedTime}
                        </div>
                      ) : (
                        ''
                      )}
                    </div>
                    <div className="w-full rounded-full bg-gray-200 dark:bg-gray-700">
                      <div
                        style={{ width: `${getProgress(surveyResponse) + '%'}` }}
                        className={`w-1.5 rounded-full bg-fountain-blue-500 text-center text-xs font-medium leading-none text-blue-100 `}
                      >
                        {' '}
                        <span className="ml-1">{getProgress(surveyResponse) + '%'}</span>
                      </div>
                    </div>
                    {/* <div>{getProgress(survey) + '%'}</div> */}
                  </div>
                </Link>
              ))}
            </div>
          </div>
          : ""}
        <div>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 py-2">
            <h1 className="text-2xl font-semibold text-gray-900">
              Test Results
            </h1>
          </div>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
            {getDiagnosticSurveys(surveyResponses)?.map((survey: Survey) => (

              <div className="w-64 rounded-lg bg-white p-2 shadow-lg">
                <h1 className="text-lg font-semibold">{survey.survey.title}</h1>
                <h4>{monthDayYear(new Date())}</h4>
                <div>
                  <div>{`${survey.results.totalValue}/${survey.questions.length * 3
                    } severity rating`}</div>
                  <div className="flex w-full">
                    <div>
                      <div className="h-32 w-8 rounded-xl bg-gradient-to-b from-green-500 to-red-500">
                        <div
                          // 100%=8rem .4*8
                          style={{
                            top: `${(survey.results.totalValue /
                              (survey.questions.length * 3)) *
                              8
                              }rem`,
                          }}
                          className={`relative h-0 w-8 rounded-full border border-black bg-black`}
                        ></div>
                      </div>
                    </div>
                    <div className="my-auto mx-auto px-2 text-center font-semibold">
                      {survey.results.message}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {getPersonalitySurveys(surveyResponses)?.map((surveyResponse: SurveyResponse) => (
              <BigFiveResults survey={surveyResponse}></BigFiveResults>
            ))}

          </div>
        </div>
      </div>
    </>
  )
}

export default testResults

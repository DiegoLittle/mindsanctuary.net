import { ArrowRightIcon, ArrowLeftIcon, XCircleIcon } from '@heroicons/react/solid'
import { useEffect, useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import Backbutton from '../ui/buttons/backbutton'
import ForwardButton from '../ui/buttons/forwardbutton'
import {getProgress} from '../../lib/util-survey'
import Modal from './modal'
import SubmitModal from './confirmSubmitModal'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
export default function question({ survey, currentQuestion,setCurrentQuestion }) {
  // Iterate through items in questions
  console.log(currentQuestion)
  const [selectedValue, setSelectedValue] = useState()
  const [error,setError] = useState<string>()
  const [openResultsModal, setOpenResultsModal] = useState(false)
  const [openSubmitModal, setOpenSubmitModal] = useState(false)
  const [results,setResults] = useState()
  // Save state for current question
  // console.log(questions[currentQuestion].choice)
  // setSelectedValue()

  useEffect(() => {
    setSelectedValue(survey.questions[currentQuestion].choice.title)
    console.log(currentQuestion)
    console.log(survey.questions[currentQuestion].choice.title)
  }, [currentQuestion])

  async function updateQuestion(title) {
    setSelectedValue(title)
    const question = survey.questions[currentQuestion].answers.filter((answer)=>
      answer.title==title
    )[0]
    survey.questions[currentQuestion].choice = question
    // Update the record serverside with a PUT HTTP Request to the API
    await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/survey/` + survey.id, {
      method: 'PUT',
      body: JSON.stringify(survey),
    })
    if(survey.questions.length>=40){
      moveForward()
    }
  }
  async function submitSurvey(survey){
    // Check if all answers are complete
    if(getProgress(survey)==100){
    var res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/survey/submit`,{
      method:"POST",
      body:JSON.stringify(survey)
    })
    let data = await res.json()
    console.log(data)
    setOpenResultsModal(true)
    setResults(data)
  }
  else{
    setError("Please complete all required questions to submit the survey")
  }
  }
  function moveForward(){
    {
      if(currentQuestion+1<survey.questions.length){
        setCurrentQuestion(currentQuestion+1)
      }
    }
  }

  return (
    <div className="py-4 px-8 block">
      <label className="text-sm leading-5 text-gray-500 mb-1 ">
        {survey.survey.subtitle}
      </label>
      <p className="py-4 text-base font-medium text-gray-900">
        {survey.questions[currentQuestion].question}
      </p>

    <RadioGroup value={selectedValue} onChange={updateQuestion}>
      <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
      <div className="space-y-4">
        {survey.questions[currentQuestion].answers.map((answer) => (
          <RadioGroup.Option
            key={answer.id}
            value={answer.title}
            className={({ checked, active }) =>
              classNames(
                checked ? 'border-transparent' : 'border-gray-300',
                active ? 'ring-2 ring-fountain-blue-500' : '',
                'relative block bg-white border rounded-lg shadow-sm px-6 py-4 cursor-pointer sm:flex sm:justify-between focus:outline-none'
              )
            }
          >
            {({ active, checked }) => (
              <>
                <div className="flex items-center">
                  <div className="text-sm">
                    <RadioGroup.Label as="p" className="font-medium text-gray-900">
                      {answer.title}
                    </RadioGroup.Label>
                    {/* <RadioGroup.Description as="div" className="text-gray-500">
                      <p className="sm:inline">
                        {plan.ram} / {plan.cpus}
                      </p>{' '}
                      <span className="hidden sm:inline sm:mx-1" aria-hidden="true">
                        &middot;
                      </span>{' '}
                      <p className="sm:inline">{plan.disk}</p>
                    </RadioGroup.Description> */}
                  </div>
                </div>
                {/* <RadioGroup.Description as="div" className="mt-2 flex text-sm sm:mt-0 sm:block sm:ml-4 sm:text-right">
                  <div className="font-medium text-gray-900">{plan.price}</div>
                  <div className="ml-1 text-gray-500 sm:ml-0">/mo</div>
                </RadioGroup.Description> */}
                <div
                onClick={()=>{updateQuestion(answer)}}
                  className={classNames(
                    active ? 'border' : 'border-2',
                    checked ? 'border-fountain-blue-500' : 'border-transparent',
                    'absolute -inset-px rounded-lg pointer-events-none'
                  )}
                  aria-hidden="true"
                />
              </>
            )}
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
    {results?<Modal results={results} open={openResultsModal} setOpen={setOpenResultsModal}></Modal>:""}
    <SubmitModal survey={survey} open={openSubmitModal} setOpen={setOpenSubmitModal} submitSurvey={submitSurvey}></SubmitModal>
    
      <div className="flex justify-center">
        <Backbutton message="Previous Question" onClick={() => {
            if(currentQuestion-1>=0){
              setCurrentQuestion(currentQuestion-1)
            }
          }}></Backbutton>
          {survey.questions.length==currentQuestion+1?
          <ForwardButton message="Submit Form" onClick={()=>{
            setOpenSubmitModal(true)
          }}></ForwardButton>
          :
          <ForwardButton message="Next Question"onClick={moveForward}></ForwardButton>
          }
      
      </div>
      {error?<div className="rounded-md bg-red-50 p-4">
      <div className="flex">
        <div className="flex-shrink-0">
          <XCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true" />
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-red-800">{error}</h3>
          {/* <div className="mt-2 text-sm text-red-700">
            <ul role="list" className="list-disc pl-5 space-y-1">
              <li>Your password must be at least 8 characters</li>
              <li>Your password must include at least one pro wrestling finishing move</li>
            </ul>
          </div> */}
        </div>
      </div>
    </div>:""}
    </div>
  )
}

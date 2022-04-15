import React from 'react'

const BigFiveResults = ({ survey }) => {
  console.log(survey)

  function getColor(index) {
    switch (index) {
      case 0:
        return "bg-red-500"
        break
      case 1:
        return "bg-green-500"
        break
      case 2:
        return "bg-orange-500"
        break
      case 3:
        return "bg-blue-500"
        break
      case 4:
        return "bg-purple-500"
        break
      case 5:
        break

      default:
        break
    }
  }

  return (
    <div className="flex flex-col flex-wrap lg:block lg:w-5/6 p-2 my-2 mr-0 border shadow-lg rounded-lg">
      <h1 className='text-xl font-semibold '>Big Five Personality Results</h1>
      {survey.results.data.map((factor,index) => (
        <div className="block w-full my-2 h-8 align-middle">
          <span className="absolute text-sm md:text-lg w-1/4 flex items-center align-middle">
            {factor.scale}
          </span>
          <div className={`inline-flex lg:ml-80 ml-36 md:ml-56 h-3/4 w-1/3 md:w-1/3 rounded-full border border-gray-300 bg-white`}
          >
            <div
              style={{ width: `${factor.percentile}%` }}
              className={`h-full rounded-full ${getColor(index)}`}
            ></div>
          </div>
          <span className="inline-flex pb-4 ml-4 items-center align-middle lg:w-1/4">
            {factor.percentile}%
          </span>
        </div>
      ))}
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}

export default BigFiveResults

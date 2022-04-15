import React from 'react'
import Header from '../../components/features/Header'
type Props = {}




const PHQ9 = (props: Props) => {
  return (
    <div>
        <Header title={"PHQ-9"} description={"The Patient Health Questionnaire (PHQ) is a 9 question self-administered diagnostic for measing the severity of depression. It scores each of the 9 DSM-IV criteria for depression as “0” (not at all) to “3” (nearly every day). PHQ-9 scores of 5, 10, 15, and 20 represented mild, moderate, moderately severe, and severe depression, respectively. While short, the PHQ-9 remains a reliable and valid measure of depression severity."}></Header>
        <div className='prose lg:prose-lg max-w-7xl mx-auto py-8 px-4 sm:py-12 sm:px-6 lg:px-8 lg:justify-between'>
        </div>
    </div>
  )
}

export default PHQ9


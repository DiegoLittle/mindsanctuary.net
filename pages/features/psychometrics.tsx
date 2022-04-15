import React from 'react'
import Header from '../../components/features/Header'
type Props = {}




const Psychometrics = (props: Props) => {
  return (
    <div>
        <Header title={"Psychometrics"} description={"Take mental health questionaires and psychometric tests such as anxiety, depression, and personality tests to gain a deeper insight into your health and mind."}></Header>
        <div className='prose lg:prose-lg max-w-7xl mx-auto py-8 px-4 sm:py-12 sm:px-6 lg:px-8 lg:justify-between'>
        <h2>Taking a test</h2>
            <div>Once you are logged in, navigate to the Psychometrics page. On the page you will see the tests that are available for you to take, the current tests you are taking, and your past test results. To begin taking a test, click on the test you would like to take in the Available Tests section. Answer each question in the test and navigate to any question in the past. The red questions in the survey navigation indicate questions that you haven't answered. <br></br> <span className='font-bold'>Note: you do not have to complete the test in one session. Your progress is automatically saved so you can return and complete the test at any time.</span></div>
            <h2>Available Tests</h2>
            <div>We currently offer tests for depression, anxiety, and personality. </div>
            <br></br>
            <span className='font-bold'>Depression Tests</span>
            <br></br>
            <ul>
                <li><a target="_blank" href="https://www.apa.org/pi/about/publications/caregivers/practice-settings/assessment/tools/beck-depression">Beck Depression Test</a></li>
                <li><a target="_blank" href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1495268/">PHQ-9</a></li>
            </ul>
            <span className='font-bold'>Anxiety Tests</span>
            <br></br>
            <ul>
                <li><a target="_blank" href="https://jamanetwork.com/journals/jamainternalmedicine/fullarticle/410326">GAD-7</a></li>
            </ul>
            <span className='font-bold'>Personality Tests</span>
            <br></br>
            <ul>
                <li><a target="_blank" href="https://www.verywellmind.com/the-big-five-personality-dimensions-2795422">Big 5 Personality</a></li>
            </ul>
            <h2>Test Results</h2>
            <div>At the bottom of the Psychometrics page there is a section titled Test Results. Your completed results will be available to you there. For depression and anxiety tests, you will be given a severity score. For personality tests you will see your score for each trait.</div>
        </div>
    </div>
  )
}

export default Psychometrics


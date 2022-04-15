import React from 'react'
import Header from '../../components/features/Header'
type Props = {}




const BigFivePersonality = (props: Props) => {
  return (
    <div>
        <Header title={"Big Five Personality"} description={"In modern psychology, there are 5 basic dimensions of personality. The 5 traits are extroversion, agreeableness, openness, conscientiousness, and neuroticism. This test is a 50-item questionaire that gives you a score for each of the 5 traits."}></Header>
        <div className='prose lg:prose-lg max-w-7xl mx-auto py-8 px-4 sm:py-12 sm:px-6 lg:px-8 lg:justify-between'>
        </div>
    </div>
  )
}

export default BigFivePersonality


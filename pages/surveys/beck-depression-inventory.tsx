import React from 'react'
import Header from '../../components/features/Header'
type Props = {}




const BeckDepressionInventory = (props: Props) => {
  return (
    <div>
        <Header title={"Beck Depression Inventory"} description={"The Beck Depression Inventory,created by psychiatrist Aaron T. Beck, is a 21-item self-administered test that measures attitudes and symptoms of depression. Each questions asks the respondent to select how they were feeling in the last week out of 4 possible responses that range in intensity. It is one of the most widely used psychometric tests for depression."}></Header>
        <div className='prose lg:prose-lg max-w-7xl mx-auto py-8 px-4 sm:py-12 sm:px-6 lg:px-8 lg:justify-between'>
        </div>
    </div>
  )
}

export default BeckDepressionInventory


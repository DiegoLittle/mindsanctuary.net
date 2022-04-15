import React from 'react'
import PersonalWelcome from './templateDisplay'

const templateDisplay = ({selected}) => {



  return (
    <div className='inline-flex'>
        {selected.name == 'Personal Welcome'&& <PersonalWelcome></PersonalWelcome>}
    </div>
  )
}

export default templateDisplay
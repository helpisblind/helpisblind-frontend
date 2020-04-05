import React from 'react'
import { Header, FundraiseForm } from '../components'
import './askforhelp.css'

function AskForHelp () {
  const onSubmit = (event) => {
    event.preventDefault()
    console.log('sumit')
  }

  return (
    <div className='AskForHelp'>
      <Header />
      <div className='wrapper'>
        <h2>We are interested in how COVID-19 affected your life.<br />
            Explain us in a summarised way.</h2>

        <FundraiseForm onSubmit={onSubmit} />
      </div>
    </div>
  )
}

export default AskForHelp
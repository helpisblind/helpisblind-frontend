import React from 'react'
import { Header, FundraiseForm } from '../components'
import { postFundraise } from '../api'
import './askforhelp.css'

function AskForHelp () {
  const onSubmit = (event) => {
    event.preventDefault()
    
    const form = event.data
    console.log(event)
    postFundraise.post(form)
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
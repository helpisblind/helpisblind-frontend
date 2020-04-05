import React, { useState } from 'react'
import { Header, FundraiseForm, Toast } from '../components'
import { postFundraise } from '../api'
import { withRouter } from 'react-router-dom'
import './askforhelp.css'

function AskForHelp ({
  history,
}) {
  const [hasError, setError] = useState(false)

  const onSubmit = (form) => {
    postFundraise(form).then(({data}) => {
      history.push(`/confirmation?id=${data._id}`)
    }).catch(err => {
      setError(true)
      setTimeout(() => {
        setError(false)
      }, 3000)
    })
  }

  return (
    <div className='AskForHelp'>
      <Header />
      <div className='wrapper'>
        <h2>We are interested in how COVID-19 affected your life.<br />
            Explain us in a summarised way.</h2>

        <FundraiseForm onSubmit={onSubmit} />
      </div>

      {hasError && (
        <Toast message={'Invalid form, please verify your data'} />
      )}
    </div>
  )
}

export default withRouter(AskForHelp)
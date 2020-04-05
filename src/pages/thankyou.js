import React from 'react'
import { withRouter } from 'react-router-dom'
import { Header } from '../components'
import './thankyou.css'

function Thankyou () {
  return (
    <div className='Thankyou'>
      <Header />
      <div className='wrapper'>
        <h1>Thank you for sharing your story!</h1>
        <h1>We hope the crisis end soon and we are here to help you get in back on your feet.</h1>
        <h4>Feel free to contact us at contact@helpisblind.se regarding anything you may discuss with us.</h4>
      </div>
    </div>
  )
}

export default withRouter(Thankyou);
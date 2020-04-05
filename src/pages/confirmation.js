import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import { Header, Button } from '../components';
import { getDonation } from '../api';
import './confirmation.css'

function Confirmation ({
  history,
}) {
  const [donation, setDonation] = useState({})

  const redirect = (url) => {
		history.push(url)
	}

  useEffect(() => {
    // const params = new URLSearchParams(history.location.search)
    // const id = params.get('id')
    const id = '5e8a046faa62cf0008450058'

    if (!id) {
      history.push('/')
    } else {
      getDonation(id).then(({data}) => {
        setDonation(data)
      }).catch(() => {
        history.push('/')
      })
    }
  }, [history])

  return (
    <div className='Confirmation'>
      <Header />
      <div className='wrapper'>
        <div className="title">
            <div className="badge">
              <img src="https://i.imgur.com/oGXjIZ2.png" alt="badge" />
            </div>
            <h1>Thank you for your contribution!</h1>
          </div>
          <div className="description">
            <h4>Amount donated {donation.amount}kr</h4>
          </div>
          <div className='message'>
            <h5>Your message</h5>
            <p>{donation.message}</p>
          </div>
          <div className='buttons'>
            <Button onClick={() => redirect('/')}>More Stories</Button>
          </div>
      </div>
    </div>
  )
}

export default withRouter(Confirmation);
import React, { Fragment, useEffect } from 'react'
import { PledgeHeader, PledgeComments, Header } from '../components'
import { getFundraise } from '../api'

function Donate () {
  useEffect(() => {
    getFundraise().then(({ data }) => {
      console.log(data);
    })
  }, [])

  return (
    <Fragment>
      <Header />
      <PledgeHeader />
      <PledgeComments />
    </Fragment>
  )
}

export default Donate;
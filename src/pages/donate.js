import React, { Fragment, useEffect } from 'react'
import { PledgeHeader, PledgeComments, Header } from '../components'
import { getPledge } from '../api'

function Donate () {
  useEffect(() => {
    getPledge().then(({ data }) => {
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
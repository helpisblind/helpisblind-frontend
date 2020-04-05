import React, { Fragment, useEffect, useState } from 'react'
import { PledgeHeader, PledgeComments, Header } from '../components'
import moment from 'moment'
import { getFundraise } from '../api'

const getDaysLeft = (date) => {
  const diff = moment(date).diff()
  const duration = moment.duration(diff)

  if (moment().isSame(date, 'day')) {
    return `Expires in ${duration.hours()} hours`
  }

  return `${duration.days()} days left`
}

const getAmountRaisedPercentage = ({amountRaised, goal}) => {
  return amountRaised / goal * 100 
}

const withExtraData = (fundraise) => {
  return {
    ...fundraise,
    amountRaisedPercentage: getAmountRaisedPercentage(fundraise),
    daysLeft: getDaysLeft(fundraise.expirationDate),
  }
}

function Donate () {
  const [fundraise, setFundraise] = useState()

  const getNewFundraise = () => {
    getFundraise().then(({ data }) => {
      setFundraise(withExtraData(data))
    })
  }

  useEffect(() => {
    getNewFundraise()
  }, [])

  return (
    <Fragment>
      <Header />
      {fundraise && (
        <Fragment>
          <PledgeHeader fundraise={fundraise} onGoToNextClick={getNewFundraise} />
          <PledgeComments fundraise={fundraise} />
        </Fragment>
      )}
    </Fragment>
  )
}

export default Donate;
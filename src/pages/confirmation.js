import React, { Fragment, useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import { Header } from '../components';
import { getFundraise } from '../api';

function Confirmation ({
  history,
}) {
  const [fundraise, setFundraise] = useState({})

  useEffect(() => {
    const params = new URLSearchParams(history.location.search)
    const id = params.get('id')

    if (!id) {
      history.push('/')
    } else {
      getFundraise(id).then(({data}) => {
        setFundraise(data)
      }).catch(() => {
        history.push('/')
      })
    }
  }, [])

  return (
    <Fragment>
      <Header />
      <div>
       a {fundraise._id} a
      </div>
    </Fragment>
  )
}

export default withRouter(Confirmation);
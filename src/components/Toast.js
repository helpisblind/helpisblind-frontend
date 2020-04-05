import React, { useRef, useEffect } from 'react'
import './Toast.css'

function Toast ({
  message,
}) {
  const refContainer = useRef();

  useEffect(() => {
    setTimeout(() => {
      refContainer.current.classList.add('Toast-animate')
    }, 0)
  }, [])

  return (
    <div className='Toast' ref={refContainer}>
      <div className='container'>
        {message}
      </div>
    </div>
  )
}

export default Toast
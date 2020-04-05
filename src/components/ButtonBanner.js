import React from 'react'
import './ButtonBanner.css'

function ButtonBanner ({
  onClick,
  alt,
}) {
  return (
    <button className='ButtonBanner' onClick={onClick}>
      <img src='./assets/arrow.png' alt={alt} />
    </button>
  )
}

export default ButtonBanner
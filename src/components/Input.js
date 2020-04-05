import React from 'react'
import './Input.css'

function Input ({
  border,
  classes,
  ...props
}) {
  return (
    <input className={`Input ${border? 'Input-border' : ''}`} {...props} />
  )
}

Input.defaultProps = {
  classes: ['Input'],
}

export default Input
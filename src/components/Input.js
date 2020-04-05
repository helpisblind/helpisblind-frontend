import React from 'react'
import './Input.css'

function Input ({
  border,
  classes,
  ...props
}) {
  if (border) {
    classes.push('Input-border')
  }

  return (
    <input className={classes.join(' ')} {...props} />
  )
}

Input.defaultProps = {
  classes: ['Input'],
}

export default Input
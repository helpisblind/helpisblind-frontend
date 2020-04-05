import React from 'react'
import './Textarea.css'

function Textarea ({
  border,
  classes,
  ...props
}) {
  return (
    <textarea className={`Textarea ${border? 'Textarea-border' : ''}`} {...props} />
  )
}

Textarea.defaultProps = {
  classes: ['Textarea'],
}

export default Textarea
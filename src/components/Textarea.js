import React from 'react'
import './Textarea.css'

function TextArea ({
  border,
  classes,
  ...props
}) {
  if (border) {
    classes.push('Textarea-border')
  }

  return (
    <textarea className={classes.join(' ')} {...props} />
  )
}

TextArea.defaultProps = {
  classes: ['Textarea'],
}

export default TextArea
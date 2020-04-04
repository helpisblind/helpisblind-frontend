import React from 'react'
import './Textarea.css'

function TextArea (props) {
  return (
    <textarea className='Textarea' {...props} />
  )
}

export default TextArea
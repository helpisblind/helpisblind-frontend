import React from 'react'
import Label from './Label'
import Input from './Input'
import Textarea from './Textarea'
import Button from './Button'
import './FundraiseForm.css'

function FundraiseForm ({
  onSubmit,
}) {
  return (
    <div className='FundraiseForm'>
      <form onSubmit={onSubmit} className='form'>
        <Label>Tell your story in 400 characters*</Label>
        <Textarea placeholder='Type in your story here...' border rows='3' />

        <Label>How much do you need?* (kr)</Label>
        <Input placeholder='Up to 5000kr' type='number' border />

        <Label>Your Swish*</Label>
        <Input placeholder='+46 XXX XXX XX XX' type='phone' border />

        <Label>Email*</Label>
        <Input placeholder='my@email.com' type='email' border />

        <div className='button'>
          <Button>
            Submit
          </Button>
        </div>
      </form>
    </div>
  )
}

export default FundraiseForm
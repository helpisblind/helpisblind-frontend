import React, { useState } from 'react'
import Label from './Label'
import Input from './Input'
import Textarea from './Textarea'
import Button from './Button'
import './FundraiseForm.css'

const defaultForm = {
  fundraiserSwish: '',
  story: '',
  goal: undefined,
  email: '',
}

function FundraiseForm ({
  onSubmit,
}) {
  const [form, setForm] = useState(defaultForm)

  const onChange = (key) => (event) => {
    setForm({
      ...form,
      [key]: event.target.value,
    })
  }

  const handleOnSubmit = (event) => {
    event.preventDefault()
    onSubmit(form)
  }

  return (
    <div className='FundraiseForm'>
      <form onSubmit={handleOnSubmit} className='form'>
        <Label>Tell your story in 400 characters*</Label>
        <Textarea placeholder='Type in your story here...' border rows='3' value={form.story} maxlenth='400' onChange={onChange('story')} />

        <Label>How much do you need?* (kr)</Label>
        <Input placeholder='Up to 5000kr' type='number' border value={form.goal} onChange={onChange('goal')} />

        <Label>Your Swish*</Label>
        <Input placeholder='+46 XXX XXX XX XX' type='phone' border onChange={onChange('fundraiserSwish')} />

        <Label>Email*</Label>
        <Input placeholder='my@email.com' type='email' border onChange={onChange('email')} />

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
import React, { useState } from 'react'
import Input from './Input'
import Label from './Label'
import Button from './Button'
import Textarea from './Textarea'
import './DonationForm.css'

const defaultForm = {
  donatorSwish: '',
  message: '',
  amount: undefined,
}

function DonationForm ({
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
    <div className='DonationForm'>
      <form onSubmit={handleOnSubmit} style={{marginTop: 10}}>
        <div style={{display: 'flex'}}>
          <div style={{flexGrow: 1, paddingRight: 15}}>
            <Label>Fill with your number</Label>
            <Input placeholder='+46 XXX XXX XX XX' type='phone' border value={form.donatorSwish} onChange={onChange('donatorSwish')} />
          </div>

          <div style={{flexGrow: 1, paddingLeft: 15}}>
            <Label>Choose the value (kr)</Label>
            <Input type='number' placeholder='100kr' value={form.amount} onChange={onChange('amount')} />
          </div>							
        </div>

        <div style={{marginTop: 15}}>
          <Label>Send a message to Castor Felpudo (optional)</Label>
          <Textarea rows='3' value={form.message} maxlenth='400' onChange={onChange('message')} />
        </div>

        <div style={{textAlign: 'center', marginTop: 30}}>
          <Button>
            Donate
          </Button>
        </div>           
      </form>   
    </div>    
  )
}

export default DonationForm
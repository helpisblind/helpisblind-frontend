import React from 'react'
import Input from './Input'
import Label from './Label'
import Button from './Button'
import Textarea from './Textarea'
import './DonationForm.css'

function DonationForm ({
  onSubmit,
}) {
  return (
    <div className='DonationForm'>
      <form onSubmit={onSubmit} style={{marginTop: 10}}>
        <div style={{display: 'flex'}}>
          <div style={{flexGrow: 1, paddingRight: 15}}>
            <Label>Fill with your number</Label>
            <Input type='text' placeholder='+46' />
          </div>

          <div style={{flexGrow: 1, paddingLeft: 15}}>
            <Label>Choose the value</Label>
            <Input type='text' placeholder='100kr' />
          </div>							
        </div>

        <div style={{marginTop: 15}}>
          <Label>Send a message to Castor Felpudo (optional)</Label>
          <Textarea rows='3' />
        </div>
      </form>

      <div style={{textAlign: 'center', marginTop: 30}}>
        <Button>
          Donate
        </Button>
      </div>      
    </div>    
  )
}

export default DonationForm
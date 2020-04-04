import React from 'react';
import Input from './Input'
import Label from './Label'
import Button from './Button'
import Textarea from './Textarea'
import './PledgeHeader.css';

function PledgeHeader () {
	const onSubmit = (event) => {
		event.preventDefault()
		console.log('onSubimt', event)
	}

	return (
		<div className="PledgeHeader">
			<div className="wrapper">
				<div className="title">
					<div className="badge" style={{marginRight: 20}}>
						<img src="https://i.imgur.com/oGXjIZ2.png" alt="badge" />
					</div>
					<h1>Castor felpudo needs your help!</h1>
				</div>
				<div className="description">
					<h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In adipiscing ut amet gravida ac etiam. Non fames et eget malesuada. Quis congue in malesuada interdum nunc suspendisse morbi. A neque neque, nam porta fringilla nunc enim pretium, mauris. Imperdiet sit nulla orci leo, libero at. Sit sit sed a etiam viverra pharetra enim sagittis.dcsasfsdfvzsdvdsgvdsgvsdvsdsdvsvs</h4>
				</div>
				<div className="donation-card">
					<div className="donation-title">
						<h2>Help Reach the Goal</h2>
					</div>
					<div className="donation-progress">
						<div className="bar-wrapper">
							<div className="bar">
								<div className="bar-inner" style={{width: '65%'}}></div>
							</div>
							<div className="bar-stats">
								<p>752kr</p>
								<p>65% of the goal</p>
								<p>26 days left</p>
							</div>							
						</div>
						<div className="total">1.157kr</div>
					</div>

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
			</div>
		</div>
	)
}

export default PledgeHeader;
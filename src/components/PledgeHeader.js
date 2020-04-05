import React from 'react';
import DonationForm from './DonationForm'
import ButtonBanner from './ButtonBanner'
import './PledgeHeader.css';

function PledgeHeader ({
	fundraise,
}) {
	const onSubmit = (event) => {
		event.preventDefault()
		console.log('onSubimt', event)
	}

	return (
		<div className="PledgeHeader">
			<ButtonBanner alt='Go to next pledge' />

			<div className="wrapper">
				<div className="title">
					<div className="badge">
						<img src="https://i.imgur.com/oGXjIZ2.png" alt="badge" />
					</div>
					<h1>Castor felpudo needs your help!</h1>
				</div>
				<div className="description">
					<h4>{fundraise.story}</h4>
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
								<p>{fundraise.amountRaised}kr</p>
								<p>{fundraise.amountRaisedPercentage}% of the goal</p>
								<p>{fundraise.daysLeft}</p>
							</div>							
						</div>
						<div className="total">{fundraise.goal}kr</div>
					</div>

					<DonationForm onSubmit={onSubmit} />
				</div>			
			</div>

			{/* Refactor to make use of ButtonBanner */}
			<button className='arrow-banner'>
				<img src='./assets/arrow.png' alt='scroll to bottom' />
			</button>
		</div>
	)
}

export default PledgeHeader;
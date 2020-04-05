import React from 'react';
import DonationForm from './DonationForm'
import ButtonBanner from './ButtonBanner'
import './PledgeHeader.css';

function PledgeHeader () {
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
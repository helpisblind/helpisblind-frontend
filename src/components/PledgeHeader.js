import React, { useState } from 'react';
import DonationForm from './DonationForm'
import ButtonBanner from './ButtonBanner'
import './PledgeHeader.css';
import { postDonation } from '../api';
import { withRouter } from 'react-router-dom';
import Toast from './Toast';

function PledgeHeader ({
	fundraise,
	history,
	onGoToNextClick,
}) {
	const [hasError, setError] = useState(false)
	
	const onSubmit = (form) => {
		postDonation({
			...form,
			fundraisingId: fundraise._id,
		}).then(({data}) => {
			history.push(`/confirmation?id=${data._id}`)
		}, err => {
			setError(true)
      setTimeout(() => {
        setError(false)
      }, 3000)
		})
	}

	return (
		<div className="PledgeHeader">
			<ButtonBanner alt='Go to next pledge' onClick={onGoToNextClick} />

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
								<div className="bar-inner" style={{width: `${fundraise.amountRaisedPercentage}%`}}></div>
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

			{hasError && (
				<Toast message='Invalid form, please check it and try again :)' />
			)}
		</div>
	)
}

export default withRouter(PledgeHeader);
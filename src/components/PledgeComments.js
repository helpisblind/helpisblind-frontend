import React, { useEffect, useState, Fragment } from 'react'
import Button from './Button'
import { getMessagesByFundraisingId } from '../api';
import './PledgeComments.css'

function PledgeBody ({
	fundraise,
}) {
	const [messages, setMessages] = useState()

	useEffect(() => {
		getMessagesByFundraisingId(fundraise._id).then(({data}) => {
			setMessages(data)
		}).catch((err) => {

		})
	}, [fundraise])

	return (
		<Fragment>
			{messages && (
				<div className="PledgeComments">
					<div className='title'>
						<h4>Comments from donators</h4>
					</div>

					{messages.map(message => (
						<div className='comment-wrapper'>
							<div className='comment'>
								<p>{message.message}</p>
							</div>				
						</div>						
					))}

					<div className='donate-button'>
						<Button>
							Donate
						</Button>
					</div>			
				</div>			
			)}			
		</Fragment>
	)
}

export default PledgeBody;
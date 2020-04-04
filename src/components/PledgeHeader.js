import React from 'react';
import './PledgeHeader.css';

function PledgeHeader () {
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
					<h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In adipiscing ut amet gravida ac etiam. Non fames et eget malesuada. Quis congue in malesuada interdum nunc suspendisse morbi. A neque neque, nam porta fringilla nunc enim pretium, mauris. Imperdiet sit nulla orci leo, libero at. Sit sit sed a etiam viverra pharetra enim sagittis.</h4>
				</div>
				<div>
					progress bar
				</div>
				<div>
					progress info
				</div>
				<div>
					...
				</div>
			</div>
		</div>
	)
}

export default PledgeHeader;
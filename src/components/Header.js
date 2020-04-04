import React from 'react';
import Button from './Button';
import './Header.css'

function Header () {
	const askForHelp = () => {
		console.log('clicou')
	}

	return (
		<header className="Header">
			<div className="left">
				<a href="/" className="title">Help is Blind</a>
			</div>

			<div className="right">
				<Button onClick={askForHelp} style={{marginRight: 30}}>
					Ask for Help
				</Button>

				<Button onClick={askForHelp}>
					About Us
				</Button>
			</div>
		</header>
	)
}

export default Header;
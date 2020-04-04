import React from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';
import './Header.css'

function Header () {
	const askForHelp = () => {
		console.log('clicou')
	}

	return (
		<header className='Header'>
			<div className='left'>
				<a href='/' className='title'>Help is Blind</a>
			</div>

			<div className='right'>
				<Link to="/about" className="about" style={{marginRight: 30}}>About</Link>

				<Button onClick={askForHelp} style={{marginRight: 30}}>
					Ask for Help
				</Button>
				
				<Button onClick={askForHelp} theme='outline'>
					Access my Pledge
				</Button>
			</div>
		</header>
	)
}

export default Header;
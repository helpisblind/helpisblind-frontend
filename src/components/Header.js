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
				<Link to="/about" className="about">About</Link>

				<Button onClick={askForHelp} className='help'>
					Ask for Help
				</Button>
				
				<Button onClick={askForHelp} theme='outline' className='pledge'>
					Access my Pledge
				</Button>
			</div>
		</header>
	)
}

export default Header;
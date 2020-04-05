import React from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom'
import './Header.css'

function Header ({
	history,
}) {
	const redirect = (url) => {
		history.push(url)
	}

	return (
		<header className='Header'>
			<div className='left'>
				<a href='/' className='title'>Help is Blind</a>
			</div>

			<div className='right'>
				<Link to="/about" className="about">About</Link>

				<Button onClick={() => redirect('/donate')} className='donate'>
					Donate ❤
				</Button>				

				<Button onClick={() => redirect('/askforhelp')} className='help' theme='outline'>
					Ask for Help
				</Button>
			</div>
		</header>
	)
}

export default withRouter(Header);
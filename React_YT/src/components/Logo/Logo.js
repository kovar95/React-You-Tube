import React from 'react';
import './Logo.scss';
import logo from '../../images/ytLogo.png';

const Logo = () => {
	return (
		<a className="logo" href="#">
			<img src={logo}/>
		</a>
	);
}

export {Logo};
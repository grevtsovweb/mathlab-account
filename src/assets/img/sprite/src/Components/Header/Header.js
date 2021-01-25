import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';


const Header = (props) => {
    return (
    	<header className='header'>
	        <img src='https://www.freelogodesign.org/Content/img/logo-ex-7.png' />
			<div className='header__login-block'>
				{props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
			</div>
	    </header>
		
	);
}

export default Header;
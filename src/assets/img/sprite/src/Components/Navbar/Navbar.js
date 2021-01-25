import React from 'react';
import {NavLink} from 'react-router-dom';
import './Navbar.css';


const Navbar = () => {
    return <nav className='navbar'>
        <div className='navbar__item'>
            <NavLink to='/profile' activeClassName='navbar__link_active'>Profile</NavLink>
        </div>
        <div className='navbar__item'>
            <NavLink to='/dialogs' activeClassName='navbar__link_active'>Messages</NavLink>
        </div>
        <div className='navbar__item'>
            <NavLink to='/users' activeClassName='navbar__link_active'>Users</NavLink>
        </div>
        <div className='navbar__item'>
            <a>News</a>
        </div>
        <div className='navbar__item'>
            <a>Music</a>
        </div>
        <div className='navbar__item'>
            <a>Settings</a>
        </div>
    </nav>
}

export default Navbar;
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/shared/logo.svg';

export const Header = () => {

    const [show, setShow] = useState(false);
    const [active, setActive] = useState('home')

    const handleToggle = () => {
        if(show === false) {
            setShow(true)
        } else {
            setShow(false)
        }
        console.log(show)
    }

    const handleActivation = (dest) => {
        setActive(dest)
    }

    return (
        <header className='primary-header flex'>
            <div>
                <img src={logo} alt='space tourism logo' className='logo' />
            </div>
            <button className={`mobile-nav-toggle ${show ? 'mobile-nav-toggle-change-icon' : ''}`} aria-controls='primary-navigation' aria-expanded='false' onClick={handleToggle}><span className='sr-only'>Menu</span></button>
            <nav>
                <ul id='primary-navigation' className={`primary-navigation underline-indicators flex ${show ? 'show-menu' : ''}`} hidden={show} >
                    <li className={active === 'home' ? 'active' : ''}>
                        <NavLink to='/home' onClick={() => handleActivation('home')} className={`ff-sans-cond uppercase text-white letter-spacing-2`}><span>00</span>Home</NavLink>
                    </li>
                    <li className={active === 'destination' ? 'active' : ''}>
                        <NavLink to='/destination' onClick={() => handleActivation('destination')} className={`ff-sans-cond uppercase text-white letter-spacing-2`}><span>01</span>Destination</NavLink>
                    </li>
                    <li className={active === 'crew' ? 'active' : ''}>
                        <NavLink to='/crew' onClick={() => handleActivation('crew')} className='ff-sans-cond uppercase text-white letter-spacing-2' href='!#'><span>02</span>Crew</NavLink>
                    </li>
                    <li className={active === 'technology' ? 'active' : ''}>
                        <NavLink to='/technology' onClick={() => handleActivation('technology')} className='ff-sans-cond uppercase text-white letter-spacing-2' href='!#'><span>03</span>Technology</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

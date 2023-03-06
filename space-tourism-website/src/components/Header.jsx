import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/shared/logo.svg';

export const Header = () => {
    return (
        <header className='primary-header flex'>
            <div>
                <img src={logo} alt='space tourism logo' className='logo' />
            </div>
            <nav>
                <ul className='primary-navigation underline-indicators flex'>
                    <li className='active'>
                        <NavLink className='ff-sans-cond uppercase text-white letter-spacing-2' href='!#'><span>00</span>Home</NavLink>
                    </li>
                    <li>
                        <NavLink className='ff-sans-cond uppercase text-white letter-spacing-2' href='!#'><span>01</span>Destination</NavLink>
                    </li>
                    <li>
                        <NavLink className='ff-sans-cond uppercase text-white letter-spacing-2' href='!#'><span>02</span>Crew</NavLink>
                    </li>
                    <li>
                        <NavLink className='ff-sans-cond uppercase text-white letter-spacing-2' href='!#'><span>03</span>Technology</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

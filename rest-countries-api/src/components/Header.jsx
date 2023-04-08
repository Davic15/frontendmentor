import React from 'react';
import classes from './Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';


export const Header = () => {
    return (
        <header>
            <nav className={classes['nav']}>
                <h1>Where ins the world?</h1>
                <div className={classes['dark-mode']}>
                    <FontAwesomeIcon icon={faMoon} />
                    <p>Dark Mode</p>
                </div>
            </nav>
        </header>
    )
}

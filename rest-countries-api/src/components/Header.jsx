import React from 'react';
import classes from './Header.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { darkModeAction } from '../store/darkmode';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';


export const Header = () => {

    const dispatch = useDispatch();
    const darkMode = useSelector(state => state)

    const handleDarkMode = () => {
        console.log(darkMode.darkMode.darkmode)
        dispatch(darkModeAction.darkMode())
        console.log(darkMode.darkMode.darkmode)
    }

    return (
        <header className={`${classes['header']} ${darkMode.darkMode.darkmode ? classes['dark-mode-background'] : classes['light-mode-background']}`}>
            <nav className={classes['nav']}>
                <h1 className={`${darkMode.darkMode.darkmode ? classes['dark-title'] : classes['light-title']}`}>Where in the world?</h1>
                <div className={`${darkMode.darkMode.darkmode ? classes['switch-dark-mode'] : classes['switch-light-mode']}`} onClick={handleDarkMode}>
                    <FontAwesomeIcon icon={faMoon} className={`${classes['svg']} ${darkMode.darkMode.darkmode ? classes['dark-title'] : classes['light-title']}`} />
                    <p className={`${classes['p']} ${darkMode.darkMode.darkmode ? classes['dark-title'] : classes['light-title']}`}>Dark Mode</p>
                </div>
            </nav>
        </header>
    )
}

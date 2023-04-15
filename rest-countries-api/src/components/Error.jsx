import React from 'react';
import classes from './Error.module.css';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export const Error = () => {

    const navigate = useNavigate();

    const darkMode = useSelector(state => state)

    const handleGoingBack = () => {
        navigate(`/home/`)
    }

    return (
        <div className={`${classes['container-main']} ${darkMode.darkMode.darkmode ? classes['container-main-dark'] : classes['container-main-light'] }`}>
            <h3 className={`${classes['title']} ${darkMode.darkMode.darkmode ? classes['title-dark'] : classes['title-light'] }`}>Page not found!</h3>
            <button className={`${classes['button']} ${darkMode.darkMode.darkmode ? classes['button-dark'] : classes['button-light']}`} onClick={handleGoingBack}><FontAwesomeIcon icon={faArrowLeft} />Back</button>
        </div>
    )
}

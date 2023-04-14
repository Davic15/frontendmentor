import React from 'react';
import classes from './Error.module.css';
import { useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export const Error = () => {

    const navigate = useNavigate();

    const handleGoingBack = () => {
        navigate(`/home/`)
    }

    return (
        <div className={classes['container-main']}>
            <h3 className={classes['title']}>Page not found!</h3>
            <button onClick={handleGoingBack}><FontAwesomeIcon icon={faArrowLeft} />Back</button>
        </div>
    )
}

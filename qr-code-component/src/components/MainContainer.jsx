import React from 'react';
import classes from './MainContainer.module.css';
import rqCode from '../assets/image-qr-code.png';

export const MainContainer = () => {
    return (
        <div className={classes.main}>
            <div className={classes['main-image-container']}>
                <img src={rqCode} alt='qr code' />
            </div>
            <div className={classes['main-description-container']}>
                <h1>Improve your front-end skills by building projects</h1>
                <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
            </div>
        </div>
    )
}

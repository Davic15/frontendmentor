import React from 'react';
import classes from './LeftContainer.module.css';

import photo from '../assets/image-jeremy.png';

export const LeftContainer = () => {
    return (
        <div className={classes['left-container']}>
            <div className={classes['detail']}>
                <img src={photo} alt='jeremy robson report' />
                <p>Report for</p>
                <h1>Jeremy Robson</h1>
            </div>
            <div className={classes['option']}>
                <button>Daily</button>
                <button>Weekly</button>
                <button>Monthly</button>
            </div>
        </div>
    )
}

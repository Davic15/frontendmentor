import React, { useState } from 'react';
import classes from './LeftContainer.module.css';

import photo from '../assets/image-jeremy.png';

export const LeftContainer = ({getDataFromUser}) => {

    const [active, setActive] = useState(0);

    return (
        <div className={classes['left-container']}>
            <div className={classes['detail']}>
                <img src={photo} alt='jeremy robson report' />
                <div>
                    <p>Report for</p>
                    <h1>Jeremy Robson</h1>
                </div>
            </div>
            <div className={classes['option']}>
                <a href='!#' className={active === 0 ? classes['active'] : ''} onClick={ (e) => {getDataFromUser(0); setActive(0)} }>Daily</a>
                <a href='!#' className={active === 1 ? classes['active'] : ''} onClick={ (e) => {getDataFromUser(1); setActive(1)} }>Weekly</a>
                <a href='!#' className={active === 2 ? classes['active'] : ''} onClick={ (e) => {getDataFromUser(2); setActive(2)} }>Monthly</a>
            </div>
        </div>
    )
}

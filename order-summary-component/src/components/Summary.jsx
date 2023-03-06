import React from 'react';
import classes from './Summary.module.css';
import imgHeader from '../assets/illustration-hero.svg';
import iconMusic from '../assets/icon-music.svg';

export const Summary = () => {
    return (
        <div className={classes['main-container']}>
            <div className={classes['main-container__img']}>
                <img src={imgHeader} alt='hero' />
            </div>
            <div className={classes['main-description']}>
                <h1>Order Summary</h1>
                <p className={classes['main-description__text']}>
                    You can now listen to millions of songs, audiobooks, and podcasts on any 
                    device anywhere you like!
                </p>
                <div className={classes['main-description__plan']}>
                    <img src={iconMusic} alt='icon music' />
                    <div className={classes['main-description__plan-cost']}>
                        <p><strong>Annual Plan</strong></p>
                        <p className={classes['main-description__plan-cost-price']}>$59.99/year</p>
                    </div>
                    <a href='!#'>Change</a>
                </div>
                <div className={classes['main-description__buttons']}>
                    <button className={classes['main-description__buttons-ok']}>Proceed to Payment</button>
                    <a href='!#' className={classes['main-description__buttons-cancel']}>Cancel Order</a>
                </div>
            </div>
        </div>
    )
}

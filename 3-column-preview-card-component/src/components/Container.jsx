import React from 'react';
import classes from './Container.module.css';
import sedanImg from '../assets/icon-sedans.svg';
import suvsImg from '../assets/icon-suvs.svg';
import luxuryImg from '../assets/icon-luxury.svg';

export const Container = () => {
    return (
        <div className={classes['main-container']}>
            <div className={`${classes['container']} ${classes['container-sedan']}`}>
                <img src={sedanImg} alt='sedans vehicle'></img>
                <h1>SEDANS</h1>
                <p>Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.</p>
                <button className={`${classes['btn']} ${classes['btn-sedan']}`}>Learn More</button>
            </div>
            <div className={`${classes['container']} ${classes['container-suvs']}`}>
                <img src={suvsImg} alt='suvs vehicle'></img>
                <h1>SUVS</h1>
                <p>Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.</p>
                <button className={`${classes['btn']} ${classes['btn-suvs']}`}>Learn More</button>
            </div>
            <div className={`${classes['container']} ${classes['container-luxury']}`}>
                <img src={luxuryImg} alt='luxury vehicle'></img>
                <h1>LUXURY</h1>
                <p>Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.</p>
                <button className={`${classes['btn']} ${classes['btn-luxury']}`}>Learn More</button>
            </div>
        </div>
    )
}

import React from 'react';
import classes from './DescriptionContainer.module.css';
import iconCard from '../assets/icon-cart.svg';

export const DescriptionContainer = () => {
    return (
        <div className={classes['description-container']}>
            <p className={classes.description}>Perfume</p>
            <p className={classes.name}><strong>Gabrielle Essence Eau De Parfum</strong></p>
            <p className={classes.details}>
                A floral, solar and voluptuous interpretation composed by Olivier Polge, 
                Perfumer-Creator for the House of CHANEL.
            </p>
            <div className={classes.prices}>
                <p className={classes['prices_new']}>$149.99</p>
                <p className={classes['prices_old']}>$169.99</p>
            </div>
            <button className={classes['btn']}>
                <img src={iconCard} alt='icon card' />
                Add to Cart
            </button>
        </div>
    )
}





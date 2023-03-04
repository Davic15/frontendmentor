import React from 'react';
import classes from './HeaderCard.module.css';
import bgTop from '../assets/bg-pattern-card.svg';

export const HeaderCard = () => {
    return (
        <div className={classes.header}>
            <img src={bgTop} alt='patter top' />
        </div>
    )
}

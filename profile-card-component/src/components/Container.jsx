import React from 'react';
import classes from './Container.module.css';
import { HeaderCard } from './HeaderCard';
import imgProfile from '../assets/image-victor.jpg';
import { Footer } from './Footer';

export const Container = () => {
    return (
        <div className={classes['main-container']}>
            <HeaderCard />
            <div className={classes['main-container__img']}>
                <img src={imgProfile} alt='profile' />
                
            </div>
            <Footer />
        </div>
    )
}

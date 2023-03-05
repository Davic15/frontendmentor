import React from 'react'
import imgFull from '../assets/image-product-desktop.jpg';
import imgMobile from '../assets/image-product-mobile.jpg';
import classes from './ImageContainer.module.css';

export const ImageContainer = () => {
    return (
        <div className={classes['image-container']}>
            <img src={imgFull} className={classes['image-full']} alt='perfume' />
            <img src={imgMobile} className={classes['image-mobile']} alt='perfume' />
        </div>
    )
}

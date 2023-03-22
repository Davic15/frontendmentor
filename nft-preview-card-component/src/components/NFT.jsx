import React from 'react';
import imageCrypto from '../assets/image-equilibrium.jpg';
import imageETH from '../assets/icon-ethereum.svg';
import imageClock from '../assets/icon-clock.svg';
import imageCreator from '../assets/image-avatar.png';
import imageView from '../assets/icon-view.svg';
import classes from './NFT.module.css';

export const NFT = () => {
    return (
        <div className={classes['container']}>
            <div className={classes['container-image']}>
                <img className={classes['ethereum']} src={imageCrypto} alt='crypto' />
                <div className={classes['overlay']}>
                    <img src={imageView} className={classes['image-overaly']} alt='overlay' />
                </div>
            </div>
            <div className={classes['container-info']}>
                <h1>Equilibrium #3429</h1>
                <p>Our Equilibrium collection promotes balance and calm.</p>
                <div className={classes['container-price']}>
                    <div className={classes['price']}>
                        <img src={imageETH} alt='ethereum' />
                        <p>0.041 ETH</p>
                    </div>
                    <div className={classes['time']}>
                        <img src={imageClock} alt='clock' />
                        <p>3 days left</p>
                    </div>
                </div>
            </div>
            <hr />
            <div className={classes['container-creator']}>
                <img className={classes['avatar']} src={imageCreator} alt='jules wyvern' />
                <p>Creation of <strong>Jules Wyvern</strong></p>
            </div>
        </div>
    )
}

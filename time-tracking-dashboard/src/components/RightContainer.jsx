import React from 'react';
import classes from './RightContainer.module.css';

import workIcon from '../assets/icon-work.svg';

import data from '../data/data.json'

export const RightContainer = () => {

    console.log(data[0].timeframes.daily.current)


    return (
        <div className={classes['right-container']}>
            <div className={`${classes['card']} ${classes['work']}`}>
                <div className={classes['top']}>
                    <img src={workIcon} alt='work' />
                </div>
                
                <div className={classes['info']}>
                    <div>
                        <p>Work</p>
                        <p>...</p>
                    </div>
                    <p className={classes['big-info']}>32hrs</p>
                    <p className={classes['small-info']}>Last Week - 36hrs</p>
                </div>
            </div>

            <div className={classes['card']}>
                <div className={classes['top']}>
                    <img src={workIcon} alt='work' />
                </div>
                
                <div className={classes['info']}>
                    <p>ha</p>
                </div>
            </div>

            <div className={classes['card']}>
                <div className={classes['top']}>
                    <img src={workIcon} alt='work' />
                </div>
                
                <div className={classes['info']}>
                    <p>ha</p>
                </div>
            </div>

            <div className={classes['card']}>
                <div className={classes['top']}>
                    <img src={workIcon} alt='work' />
                </div>
                
                <div className={classes['info']}>
                    <p>ha</p>
                </div>
            </div>

            <div className={classes['card']}>
                <div className={classes['top']}>
                    <img src={workIcon} alt='work' />
                </div>
                
                <div className={classes['info']}>
                    <p>ha</p>
                </div>
            </div>

            <div className={classes['card']}>
                <div className={classes['top']}>
                    <img src={workIcon} alt='work' />
                </div>
                
                <div className={classes['info']}>
                    <p>ha</p>
                </div>
            </div>

        </div>
    )
}

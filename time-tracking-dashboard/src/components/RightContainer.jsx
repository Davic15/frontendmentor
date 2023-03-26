import React from 'react';
import classes from './RightContainer.module.css';

import work from '../assets/icon-work.svg';

export const RightContainer = () => {
  return (
    <div className={classes['right-container']}>
        <div className={classes['card']}>
            <div className={classes['top']}>
                <img src={work} alt='work' />
            </div>
            
            <div className={classes['info']}>
                <p>ha</p>
            </div>
        </div>

        <div className={classes['card']}>
            <div className={classes['top']}>
                <img src={work} alt='work' />
            </div>
            
            <div className={classes['info']}>
                <p>ha</p>
            </div>
        </div>

    </div>
  )
}

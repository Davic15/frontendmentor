import React from 'react';
import classes from './Result.module.css';

export const Result = () => {
    return (
        <div className={classes['container-result']}>
            <h3>Your Result</h3>
            <div className={classes['container-result__circle']}>
                <p className={classes['container-result__circle-big']}>76</p>
                <p className={classes['container-result__circle-small']}>of 100</p>
            </div>
            <div className={classes['container-result__text']}>
                <h2>Great</h2>
                <p>You scored higher than 65% of the people who have taken these tests.</p>
            </div>
        </div>
    )
}

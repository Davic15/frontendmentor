import React from 'react';
import classes from './Left.module.css';

export const Left = () => {
    return (
        <div className={classes['container']}>
            <h3>Monthly Subscription</h3>
            <div className={classes['container-price']}>
                <p><span className={classes['price']}>&#36;29</span></p>
                <p className={classes['time']}>per month</p>
            </div>
            <p className={classes['info']}>Full access for less than &#36;1 a day</p>
            <button>Sign Up</button>
        </div>
    )
}

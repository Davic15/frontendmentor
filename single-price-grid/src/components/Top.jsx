import React from 'react';
import classes from './Top.module.css';

export const Top = () => {
    return (
        <div className={classes['container']}>
            <h1>Join our community</h1>
            <p className={classes['subtitle']}>30-day, hassle-free money back guarantee</p>
            <p className={classes['content']}>
                Gain access to our full library of tutorials along with expert code reviews. 
                Perfect for any developers who are serious about honing their skills.
            </p>
        </div>
    )
}

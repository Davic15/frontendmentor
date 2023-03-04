import React from 'react';
import classes from './Footer.module.css';

export const Footer = () => {
    return (
        <div className={classes.footer}>
            <h3>Victor Crest <span>26</span></h3>
            <p className={classes.city}>London</p>
            <hr className={classes.line} />
            <div className={classes.social}>
                <div className={classes['social-inner']}>
                    <p className={classes.number}>80K</p>
                    <p className={classes.text}>Followers</p>
                </div>
                <div className={classes['social-inner']}>
                    <p className={classes.number}>803K</p>
                    <p className={classes.text}>Likes</p>
                </div>
                <div className={classes['social-inner']}>
                    <p className={classes.number}>1.4K</p>
                    <p className={classes.text}>Photos</p>
                </div>
            </div>
        </div>
    )
}

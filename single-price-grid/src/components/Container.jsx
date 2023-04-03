import React from 'react';
import { Top } from './Top';
import classes from './Container.module.css';
import { Left } from './Left';
import { Right } from './Right';

export const Container = () => {
    return (
        <div className={classes['outter-container']}>
            <div className={classes['inner-top-container']}>
                <Top />
            </div>

            <div className={classes['inner-bottom-container']}>
                <Left />
                <Right />
            </div>
        </div>
    )
}

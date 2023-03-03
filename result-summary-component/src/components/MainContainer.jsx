import React from 'react';
import { Result } from './Result';
import { Summary } from './Summary';

import classes from './MainContainer.module.css'

export const MainContainer = () => {
    return (
        <div className={classes['main-container']}>
            <Result />
            <Summary />
        </div>
    )
}

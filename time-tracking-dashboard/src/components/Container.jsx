import React from 'react';
import classes from './Container.module.css';
import { LeftContainer } from './LeftContainer';
import { RightContainer } from './RightContainer';

export const Container = () => {
    return (
        <div className={classes.container}>
            <LeftContainer />
            <RightContainer />
        </div>
    )
}

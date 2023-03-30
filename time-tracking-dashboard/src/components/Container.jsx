import React, { useState } from 'react';
import classes from './Container.module.css';
import { LeftContainer } from './LeftContainer';
import { RightContainer } from './RightContainer';

export const Container = ({data}) => {

    const [selection, setSelection] = useState(0)

    const getDataFromUser = (e) => {
        setSelection(e);
    }

    return (
        <div className={classes.container}>
            <LeftContainer getDataFromUser={getDataFromUser} />
            <RightContainer selection={selection} data={data}  />
        </div>
    )
}

import React from 'react';
import classes from './DisplayAdvice.module.css';
import imgPattern from '../assets/pattern-divider-desktop.svg';
import imgPatternMobile from '../assets/pattern-divider-mobile.svg';
import iconButton from '../assets/icon-dice.svg';
import { useState } from 'react';
import { useEffect } from 'react';
export const DisplayAdvice = () => {

    const [advice, setAdvice] = useState({})

    useEffect(() => {
        onHandleClick()
    }, [])

    const onHandleClick = async() => {
        try {
            const request = await fetch ('https://api.adviceslip.com/advice');
            const {slip} = await request.json();
            setAdvice(slip)
            //console.log(slip)
        } catch (error) {
            throw new Error ('Error fetching data');
        }
    }
    

    return (
        <div className={classes.container}>
            <h1>Advice # {advice.id}</h1>
            <p>"{advice.advice}"</p>
            <img src={imgPattern} alt='pattern divider' className={classes['image-desktop']} />
            <img src={imgPatternMobile} alt='pattern divider' className={classes['image-mobile']} />
            <button onClick={onHandleClick}>
                <img className={classes.img} src={iconButton} alt='dice button' />
            </button>
        </div>
    )
}

import React from 'react';
import classes from './Summary.module.css';
import { data } from '../data/data';

export const Summary = () => {
    return (
        <div className={classes['container-summary']}>
            <h3>Summary</h3>
            <div className={classes['container-summary__option']}>
                <ul className={classes['container-summary__option-list']}>
                    {data.map((data, index) => {
                        return (
                            <li key={index} className={`${classes['container-summary__option-item']} ${classes[data.back]}`}>
                                <div>
                                    <img src={data.icon} alt={data.category} />
                                    <p className={classes[data.text]}>{data.category}</p>
                                </div>
                                
                                <div>
                                    <p className={classes['text-bold']}>{data.score} </p>
                                    <p className={classes['text-gray']}>&nbsp;/&nbsp;</p>
                                    <p className={classes['text-gray']}>100</p>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <button className={classes['btn']}>Continue</button>
        </div>
    )
}

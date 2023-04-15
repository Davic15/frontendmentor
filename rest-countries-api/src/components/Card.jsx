import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import classes from './Card.module.css';

export const Card = (props) => {

    const navigate = useNavigate();
    const darkMode = useSelector((state) => state);

    const handleSingleCountry = (country) => {
        navigate(`/country/${country}`)
    }

    return (
        <div className={classes['card']} onClick={ () => handleSingleCountry(props.country.ccn3)}>
            <div className={classes['card-top']}>
                <img src={props.country.flags.png} alt={props.country.flags.alt} />
            </div>
            <div className={`${classes['card-bottom']} ${darkMode.darkMode.darkmode ? classes['dark-mode-bottom'] : classes['light-mode-bottom'] }`}>
                <h2 className={`${classes['h2']} ${darkMode.darkMode.darkmode ? classes['dark-h2'] : classes['light-h2']} `}>{props.country.name.official}</h2>
                <p className={`${classes['p']} ${darkMode.darkMode.darkmode ? classes['p-dark'] : classes['p-light']}`}>Population: <span>{props.country.population.toLocaleString()}</span></p>
                <p className={`${classes['p']} ${darkMode.darkMode.darkmode ? classes['p-dark'] : classes['p-light']}`}>Region: <span>{props.country.region}</span></p>
                <p className={`${classes['p']} ${darkMode.darkMode.darkmode ? classes['p-dark'] : classes['p-light']}`}>Capital: <span>{props.country.capital}</span></p>
            </div>
        </div>
    )
}

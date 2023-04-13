import React from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './Card.module.css';

export const Card = (props) => {

    const navigate = useNavigate();

    const handleSingleCountry = (country) => {
        navigate(`/country/${country}`)
    }

    return (
        <div className={classes['card']} onClick={ () => handleSingleCountry(props.country.ccn3)}>
            <div className={classes['card-top']}>
                <img src={props.country.flags.png} alt={props.country.flags.alt} />
            </div>
            <div className={classes['card-bottom']}>
                <h2>{props.country.name.official}</h2>
                <p>Population: <span>{props.country.population.toLocaleString()}</span></p>
                <p>Region: <span>{props.country.region}</span></p>
                <p>Capital: <span>{props.country.capital}</span></p>
            </div>
        </div>
    )
}

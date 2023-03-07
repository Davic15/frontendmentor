import React from 'react';
import classes from './SearchContainer.module.css';
import arrowIcon from '../assets/icon-arrow.svg';

export const SearchContainer = () => {

    const onSearchDomain = (e) => {
        e.preventDefault();
        console.log('hi')
    }

    return (
        <div className={classes['search-container']}>
            <h1>IP Address Tracker</h1>
            <form className={classes['search-container-form']}>
                <input type='text' placeholder='Search for any IP address or domain' name='domain' />
                <button type='submit' onClick={onSearchDomain}>
                    <img src={arrowIcon} alt='search arrow icon' />
                </button>
            </form>
        </div>
    )
}

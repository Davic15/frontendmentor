import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import classes from './Main.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { Card } from './Card';

export const Main = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [region, setRegion] = useState('all');
    const [searchCountry, setSearchCountry] = useState('');
    const textInput = useRef('');

    const darkMode = useSelector((state) => state);

    useEffect(() => {
        getDataAllCountries();
    }, [region, searchCountry])

    const getDataAllCountries = async() => {
        setLoading(true);
        let response = ''
        if (region === 'all') {
            response = await fetch('https://restcountries.com/v3.1/all');
        }
        if (region === 'africa') {
            response = await fetch('https://restcountries.com/v3.1/region/africa')
        }
        if (region === 'americas') {
            response = await fetch('https://restcountries.com/v3.1/region/americas')
        }
        if (region === 'asia') {
            response = await fetch('https://restcountries.com/v3.1/region/asia')
        }
        if (region === 'europe') {
            response = await fetch('https://restcountries.com/v3.1/region/europe')
        }
        if (region === 'oceania') {
            response = await fetch('https://restcountries.com/v3.1/region/oceania')
        }
        if (searchCountry) {
            response = await fetch(`https://restcountries.com/v3.1/name/${searchCountry}`)
        }
        
        const data = await response.json();

        if(data.status === 404) {
            setCountries([])
        } else {
            setCountries(data);
        }
        setLoading(false)
    }

    const displayMenu = () => {
        setShowMenu(!showMenu)
    }

    const handleRegion = (region) => {
        setSearchCountry('')
        textInput.current.value = ''
        setRegion(region)
    }

    return (
        <div className={`${classes['main-container']} ${darkMode.darkMode.darkmode ? classes['dark-mode-background'] : classes['light-mode-background'] }`}>
            <div className={classes['search-container']}>
                <input type='text' className={`${classes['search-bar']} ${classes['icon']} ${darkMode.darkMode.darkmode ? classes['input-dark-background'] : classes['input-light-background'] }`} placeholder='Search for a country...' onChange={ e => setSearchCountry(e.target.value)} min={5} ref={textInput} />
                <div className={classes['dropdown']}>
                    <div>
                        <button onClick={displayMenu} className={`${classes['dropbtn']} ${darkMode.darkMode.darkmode ? classes['dropbtn-dark'] : classes['dropbtn-light'] }`}>Filter by Region <FontAwesomeIcon icon={faAngleDown} /></button>
                    </div>
                    <div id='myDropdown' className={`${classes['dropdown-content']} ${showMenu ? classes['show'] : ''}  ${darkMode.darkMode.darkmode ? classes['dropdown-content-dark'] : classes['dropdown-content-light']}`}>
                        <button onClick={ () => handleRegion('africa')} className={`${classes['button']} ${darkMode.darkMode.darkmode ? classes['button-dark'] : classes['button-light']}`}>Africa</button>
                        <button onClick={ () => handleRegion('americas')} className={`${classes['button']} ${darkMode.darkMode.darkmode ? classes['button-dark'] : classes['button-light']}`}>America</button>
                        <button onClick={ () => handleRegion('asia')} className={`${classes['button']} ${darkMode.darkMode.darkmode ? classes['button-dark'] : classes['button-light']}`}>Asia</button>
                        <button onClick={ () => handleRegion('europe')} className={`${classes['button']} ${darkMode.darkMode.darkmode ? classes['button-dark'] : classes['button-light']}`}>Europe</button>
                        <button onClick={ () => handleRegion('oceania')} className={`${classes['button']} ${darkMode.darkMode.darkmode ? classes['button-dark'] : classes['button-light']}`}>Oceania</button>
                    </div>
                </div>
            </div>

            <div className={classes['country-container']}>
                { loading === true && <p>Loading.....</p>}
                { countries.length === 0 && <p>No data to show</p>}
                { loading === false && countries.map((country, index) => {
                    return (
                        <Card key={index} country={country} />
                    )
                })}

            </div>
        </div>
    )
}

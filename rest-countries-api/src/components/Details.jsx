import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import classes from './Details.module.css';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export const Details = () => {
    const navigate = useNavigate();
    const { country } = useParams();
    const [loading, setLoading] = useState(true);
    const [detailCountry, setDetailCountry] = useState({});
    const [error, setError] = useState(false);
    const darkMode = useSelector((state) => state);

    useEffect(() => {
        getCountryData();
    }, []);

    const getCountryData = async() => {
        setLoading(true)
        const request = await fetch(`https://restcountries.com/v3.1/alpha/${country}`);
        const data = await request.json()
        if(data.status === 400) {
            setDetailCountry({})
            setError(true)
            setLoading(true)
        } else {
            setDetailCountry(data);
            setLoading(false)
        } 
    }

    const getNativeName = () => {
        const lng = Object.keys(detailCountry[0].name.nativeName)[0];
        return detailCountry[0].name.nativeName[lng].official;
    }

    const getCurrencies = () => {
        const cur = Object.keys(detailCountry[0].currencies)[0];
        return detailCountry[0].currencies[cur].name
    }

    const getLanguages = () => {
        let languages = ''
        Object.keys(detailCountry[0].languages).forEach((key) => {
            languages = detailCountry[0].languages[key] + ' ' + languages
        })
        return languages;
    }

    const getBorders = () => {
        let borders = '';
        if (typeof detailCountry[0].borders !== 'undefined' ) {
            Object.keys(detailCountry[0].borders).forEach((key, index) => {
                borders = detailCountry[0].borders[key] + ' ' + borders;
            })
        } else {
            borders = 'No data found.'
        }

        return borders;
    }

    const handleGoingBack = () => {
        navigate(`/home/`)
    }

    return (
        <>
            { error === true && 
                <div className={`${classes['container-top']} ${darkMode.darkMode.darkmode ? classes['container-top-dark'] : classes['container-top-light'] }`}>
                    <p className={classes['error']}>No data to display. Maybe there is a wrong request.</p>
                    <button onClick={handleGoingBack} className={`${classes['button']} ${darkMode.darkMode.darkmode ? classes['button-dark'] : classes['button-light'] }`}><FontAwesomeIcon icon={faArrowLeft} />Back</button>
                </div>
            }
            { loading === false && 
                <div className={`${classes['container-main']} ${darkMode.darkMode.darkmode ? classes['container-main-dark'] : classes['container-main-light'] }`}>
                    <div className={classes['container-top']}>
                        <button className={`${classes['button']} ${darkMode.darkMode.darkmode ? classes['button-dark'] : classes['button-light'] }`} onClick={handleGoingBack}><FontAwesomeIcon icon={faArrowLeft} />Back</button>
                    </div>
                    <div className={classes['container-info']}>
                        <div className={classes['container-flag']}>
                            <img src={detailCountry[0].flags.png} alt={detailCountry[0].flags.alt} />
                        </div>
                        <div className={classes['container-details']}>
                            <div>
                                <h2 className={`${classes['country']} ${darkMode.darkMode.darkmode ? classes['country-dark'] : classes['country-light']}`}>{detailCountry[0].name.official}</h2>
                            </div>
                            <div className={classes['container-details__inner']}>
                                <div className={classes['container-left']}>
                                    <p className={darkMode.darkMode.darkmode ? classes['description-dark'] : classes['description-light']}>Native Name: <span>{getNativeName()}</span></p>
                                    <p className={darkMode.darkMode.darkmode ? classes['description-dark'] : classes['description-light']}>Population: <span>{detailCountry[0].population.toLocaleString()}</span></p>
                                    <p className={darkMode.darkMode.darkmode ? classes['description-dark'] : classes['description-light']}>Region: <span>{detailCountry[0].region}</span></p>
                                    <p className={darkMode.darkMode.darkmode ? classes['description-dark'] : classes['description-light']}>Sub Region: <span>{detailCountry[0].subregion}</span></p>
                                    <p className={darkMode.darkMode.darkmode ? classes['description-dark'] : classes['description-light']}>Capital: <span>{detailCountry[0].capital[0]}</span></p>
                                </div>
                                <div className={classes['container-right']}>
                                    <p className={darkMode.darkMode.darkmode ? classes['description-dark'] : classes['description-light']}>Top Level Domain: <span>{detailCountry[0].tld[0]}</span></p>
                                    <p className={darkMode.darkMode.darkmode ? classes['description-dark'] : classes['description-light']}>Currencies: <span>{getCurrencies()}</span></p>
                                    <p className={darkMode.darkMode.darkmode ? classes['description-dark'] : classes['description-light']}>Languages: <span>{getLanguages()}</span></p>
                                </div>
                            </div>
                            <div className={classes['container-bottom']}>
                                <p className={`${classes['borders']} ${darkMode.darkMode.darkmode ? classes['description-dark'] : classes['description-light']}  }`}>Border Countries: <span>{getBorders()}</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

import React, { useEffect, useState } from 'react';
import classes from './Details.module.css';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export const Details = () => {
    const navigate = useNavigate();
    const { country } = useParams();
    const [loading, setLoading] = useState(true);
    const [detailCountry, setDetailCountry] = useState({})

    useEffect(() => {
        getCountryData();
    }, []);

    const getCountryData = async() => {
        setLoading(true)
        const request = await fetch(`https://restcountries.com/v3.1/alpha/${country}`);
        const data = await request.json()
        console.log(data)
        setDetailCountry(data);
        setLoading(false)
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
            { loading === false && 
                <div className={classes['container-main']}>
                    <div className={classes['container-top']}>
                        <button onClick={handleGoingBack}><FontAwesomeIcon icon={faArrowLeft} />Back</button>
                    </div>
                    <div className={classes['container-info']}>
                        <div className={classes['container-flag']}>
                            <img src={detailCountry[0].flags.png} alt={detailCountry[0].flags.alt} />
                        </div>
                        <div className={classes['container-details']}>
                            <div>
                                <h2 className={classes['country']}>{detailCountry[0].name.official}</h2>
                            </div>
                            <div className={classes['container-details__inner']}>
                                <div className={classes['container-left']}>
                                    
                                    <p>Native Name: <span>{getNativeName()}</span></p>
                                    <p>Population: <span>{detailCountry[0].population.toLocaleString()}</span></p>
                                    <p>Region: <span>{detailCountry[0].region}</span></p>
                                    <p>Sub Region: <span>{detailCountry[0].subregion}</span></p>
                                    <p>Capital: <span>{detailCountry[0].capital[0]}</span></p>
                                </div>
                                <div className={classes['container-right']}>
                                    <p>Top Level Domain: <span>{detailCountry[0].tld[0]}</span></p>
                                    <p>Currencies: <span>{getCurrencies()}</span></p>
                                    <p>Languages: <span>{getLanguages()}</span></p>
                                </div>
                            </div>
                            <div className={classes['container-bottom']}>
                                <p>Border Countries: <span>{getBorders()}</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

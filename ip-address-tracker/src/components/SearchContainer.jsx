import React, { useState } from 'react';
import classes from './SearchContainer.module.css';
import arrowIcon from '../assets/icon-arrow.svg';
import { validateDomain, validateIpAddress } from '../helpers/validators';

export const SearchContainer = (props) => {

    let domainData = {
        key: 0,
        ip: '',
        location: '',
        postalcode: '',
        timezone: '',
        isp: '',
        lat: 0,
        lng: 0
    }

    const [domainIp, setDomainIp] = useState('');

    const onSearchDomain = async(e) => {
        e.preventDefault();

        let baseUrl = 'https://geo.ipify.org/api/v2/country,city?apiKey=at_FY9HK146rgyu38OM2jAl58hwcWW3D&'
        let validUrl = ''
        const validDomain = validateDomain(domainIp);
        const validIpAddress = validateIpAddress(domainIp);

        if (validDomain) {
            validUrl = baseUrl + 'domain=' + domainIp;
        }

        if (validIpAddress) {
            
            validUrl = baseUrl + 'ipAddress=' + domainIp;
        }

        try {
            const request = await fetch (validUrl);
            const data = await request.json()
            domainData = {
                key: Math.random(),
                ip: data.ip,
                location: data.location.city,
                postalcode: data.location.postalCode,
                timezone: data.location.timezone,
                isp: data.isp,
                lat: data.location.lat,
                lng: data.location.lng
            }
            props.onHandleData(domainData)
        } catch(error) {
            throw new Error ('Error fetching data');
        }
    }

    const handleDomainIp = (e) => {
        setDomainIp(e.target.value)
    }

    return (
        <div className={classes['search-container']}>
            <h1>IP Address Tracker</h1>
            <form className={classes['search-container-form']} onSubmit={onSearchDomain}>
                <input type='text' placeholder='Search for any IP address or domain' onChange={handleDomainIp} value={domainIp} />
                <button>
                    <img src={arrowIcon} alt='search arrow icon' />
                </button>
            </form>
        </div>
    )
}

import React from 'react';
import classes from './InfoContainer.module.css';

export const InfoContainer = ({domainData}) => {
    const location = domainData.location + ', ' + domainData.postalcode;
    const timezone = 'UTC ' + domainData.timezone;
    return (
        <div className={classes['info-container']}>
            <div className={`${classes['info-container-ip']} ${classes['line-right']}`}>
                <p className={classes['title']}>IP Address</p>
                <p className={classes['info']}>{domainData.ip || ""}</p>
            </div>
            <div className={`${classes['info-container-location']} ${classes['line-right']}`}>
                <p className={classes['title']}>Location</p>
                <p className={classes['info']}>{domainData.location ? location : ''}</p>
            </div>
            <div className={`${classes['info-container-timezone']} ${classes['line-right']}`}>
                <p className={classes['title']}>Timezone</p>
                <p className={classes['info']}>{domainData.timezone ? timezone : ''}</p>
            </div>
            <div className={classes['info-container-isp']}>
                <p className={classes['title']}>ISP</p>
                <p className={classes['info']}>{domainData.isp || ''}</p>
            </div>
        </div>
    )
}


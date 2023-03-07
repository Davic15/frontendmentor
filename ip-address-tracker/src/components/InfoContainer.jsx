import React from 'react';
import classes from './InfoContainer.module.css';

export const InfoContainer = (props) => {
    return (
        <div className={classes['info-container']}>
            <div className={classes['info-container-ip']}>
                <p className={classes['title']}>IP Address</p>
                <p className={classes['info']}>192.168.1.1</p>
            </div>
            <div className={classes['info-container-location']}>
                <p className={classes['title']}>Location</p>
                <p className={classes['info']}>Brooklyn, NY 10001</p>
            </div>
            <div className={classes['info-container-timezone']}>
                <p className={classes['title']}>Timezone</p>
                <p className={classes['info']}>UTW-05:00</p>
            </div>
            <div className={classes['info-container-isp']}>
                <p className={classes['title']}>ISP</p>
                <p className={classes['info']}>Spacex Starlink</p>
            </div>
        </div>
    )
}

import React from 'react';
import classes from './RightContainer.module.css';

import workIcon from '../assets/icon-work.svg';
import playIcon from '../assets/icon-play.svg';
import studyIcon from '../assets/icon-study.svg';
import exerciseIcon from '../assets/icon-exercise.svg';
import socialIcon from '../assets/icon-social.svg';
import selfcareIcon from '../assets/icon-self-care.svg';

export const RightContainer = ({data, selection}) => {

    const getTimeFrameCurrent = (val = 0) => {
        let result = '';
        if (selection === 0) {
            result = data[val].timeframes.daily.current
        } else if (selection === 1) {
            result = data[val].timeframes.weekly.current
        } else {
            result = data[val].timeframes.monthly.current
        }
        return result;
    }

    const getTimeFramePrevious = (val = 0) => {
        let result = '';
        if (selection === 0) {
            result = data[val].timeframes.daily.previous
        } else if (selection === 1) {
            result = data[val].timeframes.weekly.previous
        } else {
            result = data[val].timeframes.monthly.previous
        }
        return result;
    }

    return (
        <div className={classes['right-container']}>
            <div className={`${classes['card']} ${classes['work']}`}>
                <div className={classes['top']}>
                    <img src={workIcon} alt='work' />
                </div>
                
                <div className={classes['info']}>
                    <div>
                        <p>{data[0].title}</p>
                        <p className={classes['dot']}>...</p>
                    </div>
                    <div className={classes['time']}>
                        <p className={classes['big-info']}>
                            {getTimeFrameCurrent(0)}hrs
                        </p>
                        <p className={classes['small-info']}>Last Week - {getTimeFramePrevious(0)}hrs</p>
                    </div>
                </div>
            </div>

            <div className={`${classes['card']} ${classes['play']}`}>
                <div className={classes['top']}>
                    <img src={playIcon} alt='work' />
                </div>
                
                <div className={classes['info']}>
                    <div>
                        <p>{data[1].title}</p>
                        <p className={classes['dot']}>...</p>
                    </div>
                    <div className={classes['time']}>
                        <p className={classes['big-info']}>
                            {getTimeFrameCurrent(1)}hrs
                        </p>
                        <p className={classes['small-info']}>Last Week - {getTimeFramePrevious(1)}hrs</p>
                    </div>
                </div>
            </div>

            <div className={`${classes['card']} ${classes['study']}`}>
                <div className={classes['top']}>
                    <img src={studyIcon} alt='work' />
                </div>
                
                <div className={classes['info']}>
                    <div>
                        <p>{data[2].title}</p>
                        <p className={classes['dot']}>...</p>
                    </div>
                    <div className={classes['time']}>
                        <p className={classes['big-info']}>
                            {getTimeFrameCurrent(2)}hrs
                        </p>
                        <p className={classes['small-info']}>Last Week - {getTimeFramePrevious(2)}hrs</p>
                    </div>
                </div>
            </div>

            <div className={`${classes['card']} ${classes['exercise']}`}>
                <div className={classes['top']}>
                    <img src={exerciseIcon} alt='work' />
                </div>
                
                <div className={classes['info']}>
                    <div>
                        <p>{data[3].title}</p>
                        <p className={classes['dot']}>...</p>
                    </div>
                    <div className={classes['time']}>
                        <p className={classes['big-info']}>
                            {getTimeFrameCurrent(3)}hrs
                        </p>
                        <p className={classes['small-info']}>Last Week - {getTimeFramePrevious(3)}hrs</p>
                    </div>
                </div>
            </div>

            <div className={`${classes['card']} ${classes['social']}`}>
                <div className={classes['top']}>
                    <img src={socialIcon} alt='work' />
                </div>
                
                <div className={classes['info']}>
                    <div>
                        <p>{data[4].title}</p>
                        <p className={classes['dot']}>...</p>
                    </div>
                    <div className={classes['time']}>
                        <p className={classes['big-info']}>
                            {getTimeFrameCurrent(4)}hrs
                        </p>
                        <p className={classes['small-info']}>Last Week - {getTimeFramePrevious(4)}hrs</p>
                    </div>
                </div>
            </div>

            <div className={`${classes['card']} ${classes['selfcare']}`}>
                <div className={classes['top']}>
                    <img src={selfcareIcon} alt='work' />
                </div>
                
                <div className={classes['info']}>
                    <div>
                        <p>{data[5].title}</p>
                        <p className={classes['dot']}>...</p>
                    </div>
                    <div className={classes['time']}>
                        <p className={classes['big-info']}>
                            {getTimeFrameCurrent(5)}hrs
                        </p>
                        <p className={classes['small-info']}>Last Week - {getTimeFramePrevious(5)}hrs</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

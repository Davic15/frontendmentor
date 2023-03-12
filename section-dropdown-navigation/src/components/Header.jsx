import React from 'react';
import classes from './Header.module.css';
import arrowDown from '../assets/icon-arrow-down.svg';
import arrowUp from '../assets/icon-arrow-up.svg';
import logo from '../assets/logo.svg';
import todoIcon from '../assets/icon-todo.svg';
import calendarIcon from '../assets/icon-calendar.svg';
import reminderIcon from '../assets/icon-reminders.svg';
import planningIcon from '../assets/icon-planning.svg';

export const Header = () => {
    return (
        <header className={classes['header']}>
            <div className={classes['logo']}>
                <img src={logo} alt='company logo' />
            </div>
            <nav className={classes['navbar']}>
                <ul>
                    <li className={classes['dropdown']}>
                        <a href="!#" className={classes['dropbtn']}>
                            <p>Features</p>
                            <img src={arrowDown} alt='arrow down' className={classes['down']} />
                            <img src={arrowUp} alt=' arrow up' className={classes['up']} />
                        </a>
                        
                        <div className={classes['dropdown-content']}>
                            <a href='!#' className={classes['flex']}>
                                <div>
                                    <img src={todoIcon} alt='todo list icon'/>
                                    <p>Todo List</p>
                                </div>
                                
                            </a>
                            <a href='!#' className={classes['flex']}>
                                <div>
                                    <img src={calendarIcon} alt='calendar icon' />
                                    <p>Calendar</p>
                                </div>
                            </a>
                            <a href='!#' className={classes['flex']}>
                                <div>
                                    <img src={reminderIcon} alt='reminder icon' />
                                    <p>Reminders</p>
                                </div>
                            </a>
                            <a href='!#' className={classes['flex']}>
                                <div>
                                    <img src={planningIcon} alt='planning icon' />
                                    <p>Planning</p>
                                </div>
                            </a>
                        </div>
                    </li>
                    <li className={classes['dropdown']}>
                        <a href="!#" className={classes['dropbtn']}>
                            <p>Company</p>
                            <img src={arrowDown} alt='arrow down' className={classes['down']} />
                            <img src={arrowUp} alt=' arrow up' className={classes['up']} />
                        </a>
                        
                        <div className={classes['dropdown-content']}>
                            <a href='!#' className={classes['flex']}>
                                <div>
                                    <p>History</p>
                                </div>
                                
                            </a>
                            <a href='!#' className={classes['flex']}>
                                <div>
                                    <p>Our Team</p>
                                </div>
                            </a>
                            <a href='!#' className={classes['flex']}>
                                <div>
                                    <p>Blog</p>
                                </div>
                            </a>
                            
                        </div>
                    </li>
                    <li><a href="!#">Home</a></li>
                    <li><a href="!#">News</a></li>
                    <li>
                        <div className={classes['login-button']}>
                            <a href="!#">Login</a>
                        </div>
                    </li>
                    <li>
                        <div className={classes['register-button']}>
                            <a href="!#">Register</a>
                        </div>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

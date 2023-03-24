import React, { useState } from 'react';
import classes from './Container.module.css';

export const Container = () => {

    const [name, setName] = useState(false);
    const [surname, setSurname] = useState(false);
    const [email, setEmail] = useState(false);
    const [password, setPassword] = useState(false);

    const handleName = (e) => {
        if(e.target.value.length > 0) {
            setName(false)
        } else {
            setName(true)
        }
    }

    const handleSurname = (e) => {
        if(e.target.value.length > 0) {
            setSurname(false)
        } else {
            setSurname(true)
        }
    }

    const handleEmail = (e) => {
        if(e.target.value.length > 0  && /\S+@\S+\.\S+/.test(e.target.value)) {
            setEmail(false)
        } else {
            setEmail(true)
        }
    }

    const handlePassword = (e) => { 
        if(e.target.value.length > 0) {
            setPassword(false)
        } else {
            setPassword(true)
        }
    }
    

    return (
        <div className={classes['main-container']}>
            <div className={classes['left-container']}>
                <h1>
                    Learn to code by watching others
                </h1>
                <p>
                    See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable. 
                </p>
            </div>
            <div className={classes['right-container']}>
                <p className={classes['try']}><strong>Try it free 7 days</strong> then $20/mo. thereafter</p>
            
                <form>
                    <input className={`${classes.input} ${name ? classes['error-input'] : ''}`} type='text' placeholder='First Name' onBlur={handleName} />
                    {name && <p className={classes['error-span']}>First Name cannot be empty</p>}
                    

                    <input className={classes.input} type='text' placeholder='Last Name' onBlur={handleSurname} />
                    {surname && <p className={classes['error-span']}>Last Name cannot be empty</p>}
                    
                    <input className={classes.input} type='email' placeholder='Email Address' onBlur={handleEmail} />
                    {email && <p className={classes['error-span']}>Looks like this is not an email</p>}
                    
                    <input className={classes.input} type='password' placeholder='Password' onBlur={handlePassword} />
                    {password && <p className={classes['error-span']}>Password cannot be empty</p>}
                    
                    <button className={classes.btn}>Claim your free trial</button>
                    <p className={classes.tos}>By clicking the button, you are agreeing to our <span>Terms and Services</span></p>
                </form>
            </div>
        </div>
    )
}

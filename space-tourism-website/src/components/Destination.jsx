import React, { useState } from 'react';
import moonPhoto from '../assets/destination/image-moon.png';
import moonPhotoWeb from '../assets/destination/image-moon.webp';
import marsPhoto from '../assets/destination/image-mars.png';
import marsPhotoWeb from '../assets/destination/image-mars.webp';
import europaPhoto from '../assets/destination/image-europa.png';
import europaPhotoWeb from '../assets/destination/image-europa.webp';
import titanPhoto from '../assets/destination/image-titan.png';
import titanPhotoWeb from '../assets/destination/image-titan.webp';

export const Destination = () => {
    const [show, setShow] = useState('moon');

    const handleDestination = (dest) => {
        setShow(dest)
    }

    return (
        <main id='main' className='grid-container grid-container--destination flow'>
            <h1 className='numbered-title'><span aria-hidden='true'>01</span> Pick your destination</h1>
            
            <picture hidden={show === 'moon' ? false : true}>
                <source srcSet={moonPhotoWeb} type='image/webp' />
                <img src={moonPhoto} alt='the moon' />
            </picture>

            <picture hidden={show === 'mars' ? false : true}>
                <source srcSet={marsPhotoWeb} type='image/webp' />
                <img src={marsPhoto} alt='the planet mars' />
            </picture>

            <picture hidden={show === 'europa' ? false : true}>
                <source srcSet={europaPhotoWeb} type='image/webp' />
                <img src={europaPhoto} alt='the moon europa' />
            </picture>

            <picture hidden={show === 'titan' ? false : true}>
                <source srcSet={titanPhotoWeb} type='image/webp' />
                <img src={titanPhoto} alt='the moon titan' />
            </picture>
            

            <div className="tab-list underline-indicators flex">
                <button className='uppercase ff-sans-cond text-accent bg-dark letter-spacing-2' onClick={ () => handleDestination('moon')}>Moon</button>
                <button className='uppercase ff-sans-cond text-accent bg-dark letter-spacing-2' onClick={ () => handleDestination('mars')}>Mars</button>
                <button className='uppercase ff-sans-cond text-accent bg-dark letter-spacing-2' onClick={ () => handleDestination('europa')}>Europa</button>
                <button className='uppercase ff-sans-cond text-accent bg-dark letter-spacing-2' onClick={ () => handleDestination('titan')}>Titan</button>
            </div>

            <article className='destination-info flow' hidden={show === 'moon' ? false : true}>
                <h2 className='fs-800 uppercase ff-serif'>Moon</h2>

                <p>
                    See our planet as you’ve never seen it before. A perfect relaxing trip away to help 
                    regain perspective and come back refreshed. While you’re there, take in some history 
                    by visiting the Luna 2 and Apollo 11 landing sites.
                </p>
                
                <div className='destination-meta flex'>
                    <div>
                        <h3 className='text-accent fs-200 uppercase'>Avg. distance</h3>
                        <p className='fs-500 ff-serif uppercase'>384,400 km</p>
                    </div>
                    <div>
                        <h3 className='text-accent fs-200 uppercase'>Est. travel time</h3>
                        <p className='fs-500 ff-serif uppercase'>3 days</p>
                    </div>
                </div>
            </article>

            <article className='destination-info flow' hidden={show === 'mars' ? false : true}>
                <h2 className='fs-800 uppercase ff-serif'>Mars</h2>

                <p>
                    Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, 
                    the tallest planetary mountain in our solar system. It’s two and a half times 
                    the size of Everest!
                </p>
                
                <div className='destination-meta flex'>
                    <div>
                        <h3 className='text-accent fs-200 uppercase'>Avg. distance</h3>
                        <p className='fs-500 ff-serif uppercase'>225 mil. km</p>
                    </div>
                    <div>
                        <h3 className='text-accent fs-200 uppercase'>Est. travel time</h3>
                        <p className='fs-500 ff-serif uppercase'>9 months</p>
                    </div>
                </div>
            </article>

            <article className='destination-info flow' hidden={show === 'europa' ? false : true}>
                <h2 className='fs-800 uppercase ff-serif'>Europa</h2>

                <p>
                    The smallest of the four Galilean moons orbiting Jupiter, Europa is a 
                    winter lover’s dream. With an icy surface, it’s perfect for a bit of 
                    ice skating, curling, hockey, or simple relaxation in your snug 
                    wintery cabin.
                </p>
                
                <div className='destination-meta flex'>
                    <div>
                        <h3 className='text-accent fs-200 uppercase'>Avg. distance</h3>
                        <p className='fs-500 ff-serif uppercase'>628 mil. km</p>
                    </div>
                    <div>
                        <h3 className='text-accent fs-200 uppercase'>Est. travel time</h3>
                        <p className='fs-500 ff-serif uppercase'>3 years</p>
                    </div>
                </div>
            </article>

            <article className='destination-info flow' hidden={show === 'titan' ? false : true}>
                <h2 className='fs-800 uppercase ff-serif'>Titan</h2>

                <p>
                    The only moon known to have a dense atmosphere other than Earth, Titan 
                    is a home away from home (just a few hundred degrees colder!). As a 
                    bonus, you get striking views of the Rings of Saturn.
                </p>
                
                <div className='destination-meta flex'>
                    <div>
                        <h3 className='text-accent fs-200 uppercase'>Avg. distance</h3>
                        <p className='fs-500 ff-serif uppercase'>1.6 bil. km</p>
                    </div>
                    <div>
                        <h3 className='text-accent fs-200 uppercase'>Est. travel time</h3>
                        <p className='fs-500 ff-serif uppercase'>7 years</p>
                    </div>
                </div>
            </article>
        </main>
    )
}

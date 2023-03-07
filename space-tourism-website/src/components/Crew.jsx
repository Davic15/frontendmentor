import React, { useState } from 'react';
import crewOnePhoto from '../assets/crew/image-douglas-hurley.png'
import crewOnePhotoWeb from '../assets/crew/image-douglas-hurley.webp';

import crewTwoPhoto from '../assets/crew/image-mark-shuttleworth.png'
import crewTwoPhotoWeb from '../assets/crew/image-mark-shuttleworth.webp';

import crewThreePhoto from '../assets/crew/image-victor-glover.png'
import crewThreePhotoWeb from '../assets/crew/image-victor-glover.webp';

import crewFourPhoto from '../assets/crew/image-anousheh-ansari.png'
import crewFourPhotoWeb from '../assets/crew/image-anousheh-ansari.webp';

export const Crew = () => {
    const [show, setShow] = useState('crew1');

    const handleCrew = (crew) => {
        setShow(crew)
        console.log(crew)
    }
    return (
        <main id="main" className="grid-container grid-container--crew crew flow">
            <h1 className="numbered-title"><span>02</span> Meet your crew</h1>
            
            <div className="dot-indicators flex">
                <button onClick={() => handleCrew('crew1')}><span className="sr-only">The commander</span></button>
                <button onClick={() => handleCrew('crew2')}><span className="sr-only" >The mission specialist</span></button>
                <button onClick={() => handleCrew('crew3')}><span className="sr-only">The pilot</span></button>
                <button onClick={() => handleCrew('crew4')}><span className="sr-only">The crew engineer</span></button>
            </div>
    
    
            <article hidden={show === 'crew1' ? false : true} className="crew-details flow" id="commander-tab">
                <header className="flow flow--space-small">
                    <h2 className="fs-600 ff-serif uppercase">Commander</h2>
                    <p className="fs-700 uppercase ff-serif">Douglas Hurley</p>
                </header>
                <p>
                    Douglas Gerald Hurley is an American engineer, former Marine Corps pilot 
                    and former NASA astronaut. He launched into space for the third time as 
                    commander of Crew Dragon Demo-2.
                </p>
            </article> 
    
            <article hidden={show === 'crew2' ? false : true} className="crew-details flow" id="mission-tab">
                <header className="flow flow--space-small">
                    <h2 className="fs-600 ff-serif uppercase">Mission Specialist</h2>
                    <p className="fs-700 uppercase ff-serif">Mark SHuttleworth</p>
                </header>
                <p>
                    Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind
                    the Linux-based Ubuntu operating system. Shuttleworth became the first South
                    African to travel to space as a space tourist.
                </p>
            </article> 
    
            <article hidden={show === 'crew3' ? false : true} className="crew-details flow" id="pilot-tab">
                <header className="flow flow--space-small">
                    <h2 className="fs-600 ff-serif uppercase">Pilot</h2>
                    <p className="fs-700 uppercase ff-serif">Victor Glover</p>
                </header>
                <p>
                    Pilot on the first operational flight of the SpaceX Crew Dragon to the
                    International Space Station. Glover is a commander in the U.S. Navy where
                    he pilots an F/A-18.He was a crew member of Expedition 64, and served as a
                    station systems flight engineer.
                </p>
            </article> 
    
            <article hidden={show === 'crew4' ? false : true} className="crew-details flow" id="crew-tab">
                <header className="flow flow--space-small">
                    <h2 className="fs-600 ff-serif uppercase">Flight Engineer</h2>
                    <p className="fs-700 uppercase ff-serif">Anousheh Ansari</p>
                </header>
                <p>
                    Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems.
                    Ansari was the fourth self-funded space tourist, the first self-funded woman to
                    fly to the ISS, and the first Iranian in space.
                </p>
            </article> 
    
    
            <picture hidden={show === 'crew1' ? false : true} id="commander-image">
                <source srcSet={crewOnePhotoWeb} type="image/webp" />
                <img src={crewOnePhoto} alt="Douglas Hurley" />
            </picture>

            <picture hidden={show === 'crew2' ? false : true} id="mission-image">
                <source srcSet={crewTwoPhotoWeb} type="image/webp" />
                <img src={crewTwoPhoto} alt="Douglas Hurley" />
            </picture>

            <picture hidden={show === 'crew3' ? false : true} id="pilot-image">
                <source srcSet={crewThreePhotoWeb} type="image/webp" />
                <img src={crewThreePhoto} alt="Douglas Hurley" />
            </picture>

            <picture hidden={show === 'crew4' ? false : true} id="crew-image">
                <source srcSet={crewFourPhotoWeb} type="image/webp" />
                <img src={crewFourPhoto} alt="Douglas Hurley" />
            </picture>
        </main>
    )
}

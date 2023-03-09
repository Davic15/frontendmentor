import React, { useEffect, useState, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import classes from './Map.module.css';

export const Map = (props) => {
    const [position, setPosition] = useState([50.5, 30.5]);
    
    useEffect(() => {
        if (props.domainData.lat && props.domainData.lng) {
            setPosition([props.domainData.lat, props.domainData.lng])
        }

    }, [props.domainData.lat, props.domainData.lng])


    return (
        <div className={classes['map-container']}>
            <MapContainer center={position} zoom={5} scrollWheelZoom={true} className={classes['map-container-inner']}>
                <MapRefresher lat={props.domainData.lat} lng={props.domainData.lng} />
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}


const MapRefresher = ({lat = 50.5, lng = 30.5}) => {
    const map = useMap()
    //console.log('map center: ', map.setView([lat, lng]))
    map.setView([lat, lng])
    return null
}
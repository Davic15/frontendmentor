import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import classes from './Map.module.css';
import iconLocation from '../assets/icon-location.svg'

export const Map = (props) => {
    const [position, setPosition] = useState([50.5, 30.5]);
    
    useEffect(() => {
        if (props.domainData.lat && props.domainData.lng) {
            setPosition([props.domainData.lat, props.domainData.lng])
        }

    }, [props.domainData.lat, props.domainData.lng])

    const myIcon = new L.icon({
        iconUrl: iconLocation,
        iconRetinaUrl: iconLocation,
        popupAnchor:  [-0, -0],
        iconSize: [25,35], 
    })

    return (
        <div className={classes['map-container']}>
            <MapContainer center={position} zoom={5} scrollWheelZoom={true} className={classes['map-container-inner']}>
                <MapRefresher lat={props.domainData.lat} lng={props.domainData.lng} />
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position} icon={myIcon}>
                    <Popup>
                        {props.domainData.isp} <br /> {props.domainData.ip}.
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
import React from 'react'
import { YMaps, Map, } from 'react-yandex-maps'
import GeoObjectsBlock from './GeoObjectsBlock'


const MapBlock = ({ coordinates, showGeoObjects }) => {
    return (
        < div className="map" >
            <YMaps>
                <Map defaultState={{ center: [30, 30], zoom: 4 }} width={700} height={500} >
                    {showGeoObjects && <GeoObjectsBlock coordinates={coordinates} />}
                </Map>
            </YMaps>
        </div >
    )
}

export default MapBlock
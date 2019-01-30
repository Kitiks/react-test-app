import React from 'react'
import { GeoObject, Rectangle, Circle } from 'react-yandex-maps';
import { getGeoRectangle, getGeoCircle } from '../../mapUtils/mapGeoObjectsUtil'

const geoObjectBlock = ({ coordinates }) => {
    let rectangleCoordinates, circleParameters
    if (coordinates.length > 1) {
        rectangleCoordinates = getGeoRectangle(coordinates)
        circleParameters = getGeoCircle(coordinates)
    }

    return (
        <React.Fragment>
            {
                coordinates.length > 0 && coordinates.map((item, index) =>
                    <React.Fragment key={index}>
                        <GeoObject key={index} geometry={{ type: 'Point', coordinates: item }} />
                        {index >= 1 &&
                            <GeoObject
                                key={index + 1}
                                geometry={{
                                    type: 'LineString',
                                    coordinates: [coordinates[index - 1], item],
                                }}
                                options={{
                                    geodesic: true,
                                    strokeWidth: 5,
                                    strokeColor: '#F008',
                                }}
                            />
                        }
                    </React.Fragment>
                )
            }
            {
                coordinates.length > 2 &&
                <GeoObject
                    geometry={{
                        type: 'LineString',
                        coordinates: [coordinates[0], coordinates[coordinates.length - 1]],
                    }}
                    options={{
                        geodesic: true,
                        strokeWidth: 5,
                        strokeColor: '#F008',
                    }}
                />
            }
            {
                rectangleCoordinates &&
                <Rectangle
                    geometry={[rectangleCoordinates.firstPoint, rectangleCoordinates.secondPoint]}
                    options={{
                        draggable: true,
                        fillColor: '#ffff0022',
                        strokeColor: '#3caa3c88',
                        strokeWidth: 7,
                    }}
                />
            }
            {
                circleParameters &&
                <Circle
                    geometry={[circleParameters.center, circleParameters.radius]}
                    options={{
                        draggable: true,
                        fillColor: '#DB709377',
                        strokeColor: '#990066',
                        strokeOpacity: 0.8,
                        strokeWidth: 5,
                    }}
                />
            }
        </React.Fragment>
    )
}

export default geoObjectBlock
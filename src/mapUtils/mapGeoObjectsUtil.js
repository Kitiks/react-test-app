import { distanceBetweenPoints, middlePointBetweenTwoPoints } from './mapPointsUtil'

const getGeoRectangle = coordinates => {
    let latitudes = [], longitudes = []
    for (let i = 0; i < coordinates.length; i++) {
        latitudes.push(coordinates[i][0])
        longitudes.push(coordinates[i][1])
    }
    return { firstPoint: [Math.min(...latitudes), Math.min(...longitudes)], secondPoint: [Math.max(...latitudes), Math.max(...longitudes)] }
}

const getGeoCircle = coordinates => {
    let firstPoint, secondPoint, centralPoint = [], maxDistanceBetweenAllPoints = 0
    for (let i = 0; i < coordinates.length; i++) {
        for (let j = 0; j < coordinates.length; j++) {
            if (maxDistanceBetweenAllPoints < distanceBetweenPoints(coordinates[i], coordinates[j])) {
                maxDistanceBetweenAllPoints = distanceBetweenPoints(coordinates[i], coordinates[j])
                firstPoint = coordinates[i]
                secondPoint = coordinates[j]
            }
        }
    }
    centralPoint = middlePointBetweenTwoPoints(firstPoint, secondPoint)
    maxDistanceBetweenAllPoints = 0
    for (let i = 0; i < coordinates.length; i++) {
        maxDistanceBetweenAllPoints = maxDistanceBetweenAllPoints < distanceBetweenPoints(centralPoint, coordinates[i]) ? distanceBetweenPoints(centralPoint, coordinates[i]) : maxDistanceBetweenAllPoints
    }
    return { center: centralPoint, radius: maxDistanceBetweenAllPoints }
}

export {
    getGeoCircle,
    getGeoRectangle,
}
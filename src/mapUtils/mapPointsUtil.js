const EARTH_RADIUS = 6372795

const distanceBetweenPoints = (fPoint, sPoint) => {
    const firstPoint = [Number(fPoint[0]), Number(fPoint[1])]
    const secondPoint = [Number(sPoint[0]), Number(sPoint[1])]

    const firstPointLatitude = firstPoint[0] * Math.PI / 180
    const secondPointLatitude = secondPoint[1] * Math.PI / 180
    const deltaLatitude = (secondPoint[0] - firstPoint[0]) * Math.PI / 180
    const deltaLongitude = (secondPoint[1] - firstPoint[1]) * Math.PI / 180
    const a = Math.sin(deltaLatitude / 2) * Math.sin(deltaLatitude / 2) + Math.cos(firstPointLatitude) * Math.cos(secondPointLatitude) * Math.sin(deltaLongitude / 2) * Math.sin(deltaLongitude / 2)
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))

    return EARTH_RADIUS * c
}

const middlePointBetweenTwoPoints = (fPoint, sPoint) => {
    const firstPoint = [Number(fPoint[0] * Math.PI / 180), Number(fPoint[1] * Math.PI / 180)]
    const secondPoint = [Number(sPoint[0] * Math.PI / 180), Number(sPoint[1] * Math.PI / 180)]

    //по большой круговой траектории 
    const Bx = Math.cos(secondPoint[0]) * Math.cos(secondPoint[1] - firstPoint[1])
    const By = Math.cos(secondPoint[0]) * Math.sin(secondPoint[1] - firstPoint[1])
    const middlePointLatitude = Math.atan2(Math.sin(firstPoint[0]) + Math.sin(secondPoint[0]), Math.sqrt((Math.cos(firstPoint[0]) + Bx) * (Math.cos(firstPoint[0]) + Bx) + By * By))
    const middlePointLongitude = +firstPoint[1] + Math.atan2(By, Math.cos(firstPoint[0]) + Bx)

    return [middlePointLatitude * 180 / Math.PI, middlePointLongitude * 180 / Math.PI]
}

export {
    distanceBetweenPoints,
    middlePointBetweenTwoPoints,
}
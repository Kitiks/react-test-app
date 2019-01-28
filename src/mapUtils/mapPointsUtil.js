const EARTH_RADIUS = 6372795

const distanceBetweenPoints = (firstPoint, secondPoint) => {

    // перевести координаты в радианы
    const firstPointLatitude = firstPoint[0] * Math.PI / 180
    const secondPointLatitude = secondPoint[0] * Math.PI / 180
    const firstPointLongitude = firstPoint[1] * Math.PI / 180
    const secondPointLongitude = secondPoint[1] * Math.PI / 180

    // косинусы и синусы широт и разницы долгот
    const cosFirstLatitude = Math.cos(firstPointLatitude)
    const cosSecondLatitude = Math.cos(secondPointLatitude)
    const sinFirstLatitude = Math.sin(firstPointLatitude)
    const sinSecondLatitude = Math.sin(secondPointLatitude)
    const deltaLongitudes = secondPointLongitude - firstPointLongitude
    const cosDeltaLongitudes = Math.cos(deltaLongitudes)
    const sinDeltaLongitudes = Math.sin(deltaLongitudes)

    // вычисления длины большого круга
    const y = Math.sqrt(Math.pow(cosSecondLatitude * sinDeltaLongitudes, 2)
        + Math.pow(cosFirstLatitude * sinSecondLatitude - sinFirstLatitude * cosSecondLatitude * cosDeltaLongitudes, 2))
    const x = sinFirstLatitude * sinSecondLatitude + cosFirstLatitude * cosSecondLatitude * cosDeltaLongitudes

    //возвращается значение в метрах
    return Math.atan2(y, x) * EARTH_RADIUS
}

export {
    distanceBetweenPoints,
}
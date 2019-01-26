import React from 'react'

const getYandexMapLink = (coordinate) => {
    return `http://maps.yandex.ru/?text=${coordinate.x},${coordinate.y}`
}

const getGoogleMapLink = (coordinate) => {
    return `https://www.google.com/maps/search/?api=1&query=${coordinate.x},${coordinate.y}`
}

const TableViewCoordinatePointsBlock = ({ coordinates }) => {
    return (
        <table className="table points-table">
            <thead><tr><th>Широта</th><th>Долгота</th><th>Яндекс карты</th><th>Google карты</th></tr></thead>
            <tbody>{coordinates.length !== 0 && coordinates.map((row, indexRow) =>
                <tr key={indexRow}>
                    <td>{row[0]}</td>
                    <td>{row[1]}</td>
                    <td><a href={getYandexMapLink({ x: row[0], y: row[1] })}>Яндекс ссылка</a></td>
                    <td><a href={getGoogleMapLink({ x: row[0], y: row[1] })}>Google ссылка</a></td>
                </tr>
            )}
            </tbody>
        </table>
    )
}

export default TableViewCoordinatePointsBlock
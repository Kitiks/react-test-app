import React from 'react'
import InputFormCoordinatePointsBlock from './InputFormCoordinatePointsBlock/InputFormCoordinatePointsBlock'
import TableViewCoordinatePointsBlock from './TableViewCoordinatePointsBlock'

class CoordinatePointsBlock extends React.Component {
    state = {
        coordinates: [],
        latitudeSortingDesc: true,
        longitudeSortingDesc: true,
    }

    process = (name) => {
        document.title = name
    }

    pointAdd = (point) => {
        let newCoordinates = this.state.coordinates
        newCoordinates.push(point)
        this.setState({ coordinates: newCoordinates })
    }

    pointDelete = () => {
        let newCoordinates = this.state.coordinates
        newCoordinates.pop()
        this.setState({ coordinates: newCoordinates })
    }

    sortByLatitude = () => {
        let sortableCoordinates = this.state.coordinates
        sortableCoordinates.sort((a, b) => this.state.latitudeSortingDesc ? b[0] - a[0] : a[0] - b[0])
        this.setState({ latitudeSortingDesc: !this.state.latitudeSortingDesc, coordinates: sortableCoordinates })
    }

    sortByLongitude = () => {
        let sortableCoordinates = this.state.coordinates
        sortableCoordinates.sort((a, b) => this.state.longitudeSortingDesc ? b[1] - a[1] : a[1] - b[1])
        this.setState({ longitudeSortingDesc: !this.state.longitudeSortingDesc, coordinates: sortableCoordinates })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <InputFormCoordinatePointsBlock
                            process={this.process}
                            pointAdd={this.pointAdd}
                            pointDelete={this.pointDelete}
                        />
                    </div>
                    <div className="col-lg-6">
                        <TableViewCoordinatePointsBlock
                            coordinates={this.state.coordinates}
                            sortByLatitude={this.sortByLatitude}
                            sortByLongitude={this.sortByLongitude}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default CoordinatePointsBlock
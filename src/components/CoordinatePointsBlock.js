import React from 'react'
import InputFormCoordinatePointsBlock from './InputFormCoordinatePointsBlock/InputFormCoordinatePointsBlock'
import TableViewCoordinatePointsBlock from './TableViewCoordinatePointsBlock'

class CoordinatePointsBlock extends React.Component {
    state = {
        coordinates: [],
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
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-6"><InputFormCoordinatePointsBlock process={this.process} pointAdd={this.pointAdd} pointDelete={this.pointDelete} /></div>
                    <div className="col-lg-6"><TableViewCoordinatePointsBlock coordinates={this.state.coordinates} /></div>
                </div>
            </div>
        );
    }
}

export default CoordinatePointsBlock
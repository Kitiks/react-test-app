import React from 'react'
import InputFormCoordinatePointsBlock from './InputFormCoordinatePointsBlock'
import TableViewCoordinatePointsBlock from './TableViewCoordinatePointsBlock'

class CoordinatePointsBlock extends React.Component {
    state = {
        coordinates: [],
    }
    process = (data) => {
        this.setState({ coordinates: data.coords })
        document.title = data.name
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-6"><InputFormCoordinatePointsBlock process={this.process} /></div>
                    <div className="col-lg-6"><TableViewCoordinatePointsBlock coordinates={this.state.coordinates} /></div>
                </div>
            </div>
        );
    }
}

export default CoordinatePointsBlock
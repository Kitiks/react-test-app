import React from 'react'

class InputFormCoordinatePointsBlock extends React.Component {
    state = {
        jsonText: '{ "name": "Point1", "coords": [[31.26335, 58.53901], [32.23233, 59.23232]] }',
    }
    render() {
        return (
            <div className="form-group input-form">
                <textarea
                    className="form-control"
                    defaultValue={this.state.jsonText}
                    rows="5"
                    onChange={(e) => { this.setState({ jsonText: e.currentTarget.value }) }}>
                </textarea>
                <button
                    className="btn btn-primary"
                    onClick={() => this.props.process(JSON.parse(this.state.jsonText))}>
                    Обработать
                </button>
            </div>
        )
    }
}

export default InputFormCoordinatePointsBlock
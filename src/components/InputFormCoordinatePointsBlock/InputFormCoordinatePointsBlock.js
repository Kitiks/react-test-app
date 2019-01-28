import React from 'react'
import InputFormCoordinatePointsBlockErrors from './InputFormCoordinatePointsBlockErrors'

class InputFormCoordinatePointsBlock extends React.Component {
    state = {
        name: 'Points',
        latitude: null,
        longitude: null,
        formErrors: { latitude: '', longitude: '' },
        latitudeValid: false,
        longitudeValid: false,
        formValid: false,
    }

    validateField = (fieldName, value) => {
        let fieldValidationErrors = this.state.formErrors
        let latitudeValid = this.state.latitudeValid
        let longitudeValid = this.state.longitudeValid
        const regExpr = /(\-\d)|(\d)|(\-\d(\.|\,)\d)|(\d(\.|\,)\d)$/i
        switch (fieldName) {
            case 'latitude':
                latitudeValid = value.match(regExpr) && (value >= -90 && value <= 90)
                fieldValidationErrors.latitude = latitudeValid ? '' : 'Неправильно установлена широта.'
                break
            case 'longitude':
                longitudeValid = value.match(regExpr) && (value >= -180 && value <= 180)
                fieldValidationErrors.longitude = longitudeValid ? '' : 'Неправильно установлена долгота.'
                break
            default:
                break
        }
        this.setState({
            formErrors: fieldValidationErrors,
            latitudeValid: latitudeValid,
            longitudeValid: longitudeValid,
        }, this.validateForm)
    }

    validateForm = () => {
        this.setState({ formValid: this.state.latitudeValid && this.state.longitudeValid })
    }

    handleUserInput = (e) => {
        const name = e.currentTarget.name
        const value = e.currentTarget.value
        this.setState({ [name]: value }, () => { this.validateField(name, value) })
    }

    render() {
        return (
            <div className="form-group input-form">
                <label htmlFor="nameText">Имя</label>
                <input
                    type="text"
                    id="nameText"
                    className="form-control"
                    name="name"
                    defaultValue={this.state.name}
                    onChange={this.handleUserInput}
                />
                <label htmlFor="latitudeText">Широта</label>
                <input
                    type="number"
                    id="latitudeText"
                    className="form-control"
                    name="latitude"
                    defaultValue={this.state.latitude}
                    onChange={this.handleUserInput}
                />
                <label htmlFor="longitudeText">Долгота</label>
                <input
                    type="number"
                    id="longitudeText"
                    className="form-control"
                    name="longitude"
                    defaultValue={this.state.longitude}
                    onChange={this.handleUserInput}
                />
                <button
                    className="btn btn-primary"
                    onClick={() => this.props.process(this.state.name)}>
                    Установить заголовок документа
                </button>
                <button
                    className="btn btn-primary"
                    onClick={() => this.props.pointAdd([this.state.latitude, this.state.longitude])}
                    disabled={!this.state.formValid}>
                    <i className="fas fa-plus"></i>
                </button>
                <button
                    className="btn btn-primary"
                    onClick={() => this.props.pointDelete()}>
                    <i className="fas fa-minus"></i>
                </button>
                {(this.state.formErrors.latitude || this.state.formErrors.longitude) &&
                    <div className="panel panel-default">
                        <InputFormCoordinatePointsBlockErrors formErrors={this.state.formErrors} />
                    </div>
                }
            </div >
        )
    }
}

export default InputFormCoordinatePointsBlock
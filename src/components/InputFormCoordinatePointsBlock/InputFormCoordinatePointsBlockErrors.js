import React from 'react'

const InputFormCoordinatePointsBlockErrors = ({ formErrors }) => {
    return (
        <div className='formErrors'>
            {Object.keys(formErrors).map((fieldName, i) => formErrors[fieldName] && <p className="text-lg-center font-weight-bold" key={i}>{formErrors[fieldName]}</p>)}
        </div>
    )
}

export default InputFormCoordinatePointsBlockErrors
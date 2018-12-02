import React from 'react'
import PropTypes from 'prop-types'
import './style.css'

const Location = ({city}) => {
    return (
        <div className ="LocationCont">
            <h1>{city}</h1>
        </div>
    )
}

Location.protoType = {
    city: PropTypes.string
}

export default Location;
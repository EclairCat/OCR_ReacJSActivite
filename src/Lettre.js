import React from 'react'
import PropTypes from 'prop-types'
import './Lettre.css'

const HIDDEN_SYMBOL = '_'


const Lettre = ({ lettre, feedback, index  }) => (
    <div className={`card lettre ${feedback}`} >
      <span className="symbol">
        {feedback === 'hidden' ? HIDDEN_SYMBOL : lettre}
      </span>
    </div>
)

Lettre.propTypes = {
    lettre: PropTypes.string.isRequired,
    feedback: PropTypes.oneOf([
      'hidden',
      'visible',
    ]).isRequired,
    index: PropTypes.number.isRequired,
}

export default Lettre
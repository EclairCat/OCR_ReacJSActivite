import React from 'react'
import PropTypes from 'prop-types'
import './clavier.css'

const Clavier = ({touche, onClick})=> (
    <div className={`touche toucheBtn`} onClick={() => onClick(touche)}>
       <button className="lettreSurTouche">
            {touche}  
       </button>
    </div>
)


Clavier.propTypes = {
    touche: PropTypes.string.isRequired,
}

export default Clavier
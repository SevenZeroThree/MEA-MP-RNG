import React, { PropTypes } from 'react';

const RandomClass = ({ randomClass }) => (
    <div>
        <h2>{randomClass.character}</h2>
        <h2>{randomClass.weapon}</h2>
    </div>
)

RandomClass.propTypes = {
    randomClass: PropTypes.object.isRequired
}

export default RandomClass;
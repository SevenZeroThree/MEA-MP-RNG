import React, { PropTypes } from 'react';

const ReRollButton = ({onClick}) => (
    <button onClick={onClick}>ReRoll</button>
)

ReRollButton.propTypes = {
    onClick: PropTypes.func.isRequired
}

export default ReRollButton;
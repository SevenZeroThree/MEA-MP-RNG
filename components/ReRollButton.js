import React from 'react';
import PropTypes from 'prop-types';

const ReRollButton = ({onClick}) => (
    <button id="re-roll-button" className="btn btn-default" onClick={onClick}>ReRoll</button>
)

ReRollButton.propTypes = {
    onClick: PropTypes.func.isRequired
}

export default ReRollButton;
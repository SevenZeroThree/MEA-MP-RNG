import React, { PropTypes } from 'react';

const ReRollButton = ({onClick}) => (
    <button className="btn btn-default" onClick={onClick}>ReRoll</button>
)

ReRollButton.propTypes = {
    onClick: PropTypes.func.isRequired
}

export default ReRollButton;
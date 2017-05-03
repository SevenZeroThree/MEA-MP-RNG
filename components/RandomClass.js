import React from 'react';
import PropTypes from 'prop-types';

const RandomClass = ({ randomClass }) => (
    <div>
        <h1>Your Random Class Setup Is:</h1>
        <div className="row">
            <div className="col-xs-12 col-md-6">
                <div className="panel panel-default">
                    <div className="panel-body">
                        {randomClass.character}
                    </div>
                </div>
            </div>
            <div className="col-xs-12 col-md-6">
                <div className="panel panel-default">
                    <div className="panel-body">
                        {randomClass.weapon}
                    </div>
                </div>
            </div>
        </div>
    </div>
)

RandomClass.propTypes = {
    randomClass: PropTypes.object.isRequired
}

export default RandomClass;
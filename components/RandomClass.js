import React, { PropTypes } from 'react';

const RandomClass = ({ randomClass }) => (
    <div>
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
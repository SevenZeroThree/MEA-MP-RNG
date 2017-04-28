import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchRandomClass } from '../actions'

class App extends Component {

    constructor(props) {
        super(props);
        this.handleRollClick = this.handleRollClick.bind(this);
    }

    componentDidMount() {
        const dispatch = this.props.dispatch;
        dispatch(fetchRandomClass());
    }

    handleRollClick(e) {
        e.preventDefault();

        const dispatch = this.props.dispatch;
        dispatch(fetchRandomClass());
    }

    render() {
        return (
            <div>
                { this.props.isProcessing &&
                    <h3>Processing</h3>
                }
                <h1>Generated Class</h1>
                {
                    this.props.randomClass !== undefined &&
                        <div>
                            <h2>{this.props.randomClass.character}</h2>
                            <h2>{this.props.randomClass.weapon}</h2>
                        </div>
                }
            </div>
        )
    }
}

App.propTypes = {
    dispatch: PropTypes.func.isRequired,
    randomClass: PropTypes.object.isRequired,
    isProcessing: PropTypes.bool.isRequired
}

function mapStateToProps(state) {
    return {
        isProcessing: state.randomClasses.isProcessing,
        randomClass: state.randomClasses.randomClass
    }
}

export default connect(mapStateToProps)(App);

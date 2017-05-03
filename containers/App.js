import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import '../content/sass/app.scss';

import { fetchRandomClass } from '../actions'
import Header from '../components/Header';
import RandomClass from '../components/RandomClass';
import ReRollButton from '../components/ReRollButton';
import Footer from '../components/Footer';
import Processing from '../components/Processing';

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
        const { isProcessing, randomClass } = this.props
        return (
            <div>
                <Header />
                <div className="container">
                    <p>
                        Welcome to the random class generator for Mass Effect: Andromeda multiplayer!
                    </p>
                    <p>
                        What setup will you get?
                    </p>
                    { isProcessing &&
                        <Processing />
                    }
                    
                    { randomClass &&
                        <RandomClass randomClass={randomClass} />
                    }
                    
                    <ReRollButton onClick={this.handleRollClick} />

                    <Footer />
                </div>
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

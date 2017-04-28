import { 
    GET_RANDOM_CLASS,
    RECEIVE_RANDOM_CLASS 
} from '../actions';

const randomClasses = (state = [], action) => {
    switch (action.type) {
        case GET_RANDOM_CLASS:
            return Object.assign({}, state, {
                isProcessing: true
            })
        case RECEIVE_RANDOM_CLASS:
            return Object.assign({}, state, {
                isProcessing: false,
                randomClasses: action.randomClasses
            })
        default:
            return state;
    }
}

export default randomClasses;
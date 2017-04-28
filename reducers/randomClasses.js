import { 
    GET_RANDOM_CLASS,
    RECEIVE_RANDOM_CLASS 
} from '../actions';

const randomClasses = (state = { isProcessing: true, randomClass: {} }, action) => {
    switch (action.type) {
        case GET_RANDOM_CLASS:
            return Object.assign({}, state, {
                isProcessing: true
            })
        case RECEIVE_RANDOM_CLASS:
            return Object.assign({}, state, {
                isProcessing: false,
                randomClass: action.randomClass
            })
        default:
            return state;
    }
}

export default randomClasses;
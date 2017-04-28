export const GET_RANDOM_CLASS = 'GET_RANDOM_CLASS';
export const RECEIVE_RANDOM_CLASS = 'RECEIVE_RANDOM_CLASS';

export function getRandomClass() {
    return {
        type: GET_RANDOM_CLASS
    }
}

export function receiveRandomClass(randomClass) {
    return {
        type: RECEIVE_RANDOM_CLASS,
        randomClass: randomClass
    }
}

export function fetchRandomClass() {
    return function(dispatch) {
        dispatch(getRandomClass());

        return dispatch(receiveRandomClass({
            character: 'Human Male Vanguard',
            weapon: 'Viper'
        }))
    }
}
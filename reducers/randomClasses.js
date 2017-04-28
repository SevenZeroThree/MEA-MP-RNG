const randomClasses = (state = [], action) => {
    switch (action.type) {
        case 'GET_CLASS':
            return Object.assign({}, state, {
                isProcessing: true
            })
        default:
            return state;
    }
}

export default randomClasses;
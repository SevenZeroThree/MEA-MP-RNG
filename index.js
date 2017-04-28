import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rngApp from './reducers';

import App from './components/app';

let store = createStore(rngApp);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('container')
);
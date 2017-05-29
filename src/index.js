import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import App from './components/App';
import reducers from './reducers';

import { fetchAPI } from './actions/';


const middleware = [ thunk ];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

const store = createStore(
  reducers,
  applyMiddleware(...middleware)
)

// const store = createStore(reducers, applyMiddleware(thunk, createLogger()));



render(
  <Provider store={store}>
    <App />    
  </Provider>,
  document.getElementById('root')
);
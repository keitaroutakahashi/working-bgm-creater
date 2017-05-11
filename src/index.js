import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import App from './components/App';
import reducers from './reducers';

import { changeFirstArtists,changeSecondArtists, changeThirdArtists, fetchAPI } from './actions/';

const store = createStore(reducers, applyMiddleware(thunk, createLogger()));


store.dispatch(changeFirstArtists('hoge'))

store.dispatch(fetchAPI())

render(
  <Provider store={store}>
    <App />    
  </Provider>,
  document.getElementById('root')
);
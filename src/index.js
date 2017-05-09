import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import App from './components/App';
import reducers from './reducers';

import { changeFirstArtists,changeSecondArtists, changeThirdArtists } from './actions/';

const store = createStore(reducers, applyMiddleware(createLogger()));


store.dispatch(changeFirstArtists('くり'))
store.dispatch(changeSecondArtists('くfekfpり'))
store.dispatch(changeThirdArtists('くfewfweり'))
render(
  <Provider store={store}>
    <App />    
  </Provider>,
  document.getElementById('root')
);
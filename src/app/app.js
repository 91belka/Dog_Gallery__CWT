import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import Main from './containers/Main';

const store = configureStore();
render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('root')
);

export default store;

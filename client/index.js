import React from 'react';
import ReactDOM from 'react-dom';
// import Main from './components/Main';
import BrowserRoutes from './components/BrowserRoutes';

import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <BrowserRoutes />
    </BrowserRouter>
  </Provider>,
  document.getElementById('main')
);

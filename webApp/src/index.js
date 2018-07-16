import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/configureStore';
import { ConnectedRouter } from 'react-router-redux';
import history from './provider/history';
import routes from './provider/routes';
import registerServiceWorker from './registerServiceWorker';

import './App.css';

global.requestAnimationFrame = function (callback) {
  setTimeout(callback, 0);
};

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
        {routes}
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();

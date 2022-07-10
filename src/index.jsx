import React from 'react';
import ReactDOM from 'react-dom/client';
import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducer from './reducers/reducer';

import App from './components/App';

import './index.scss';

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const loggerMiddleware = () => (next) => (action) => next(action);

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(loggerMiddleware, thunk))
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

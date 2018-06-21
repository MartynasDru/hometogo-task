import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import thunk from 'redux-thunk';
import apiReducer from './store/reducers/API';
import comboBoxReducer from './store/reducers/ComboBox';

import { applyMiddleware, combineReducers, createStore } from 'redux';

import { Provider } from 'react-redux';

import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
    api: apiReducer,
    comboBox: comboBoxReducer,
});

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk)
));

const app = (
  <Provider store={store}>
      <App />
  </Provider>
);

ReactDOM.render(
  app,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();

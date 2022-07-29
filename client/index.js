import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import history from './history';
import store from './store';
import App from './App';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

// make sure this is the same as the id of the div in your index.html
const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>
);

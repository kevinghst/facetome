import React from 'react';
import ReactDOM from 'react-dom';
import {signup, login, logout} from './actions/session_actions';
import Root from './components/root';
// import {signup, login, logout} from './util/session_api_util';

import configureStore from './store/store.js';


document.addEventListener('DOMContentLoaded', () => {

  window.signup = signup;
  window.login = login;
  window.logout = logout;

  let store;

  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }
  window.store = store;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});


//window.sign

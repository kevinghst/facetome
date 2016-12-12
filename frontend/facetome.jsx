import React from 'react';
import ReactDOM from 'react-dom';
import {signup, login, logout} from './actions/session_actions';
import Root from './components/root';
import {deleteUser} from './util/session_api_util';
import {fetchProfile, updateProfile} from './actions/profile_actions';
import {friendRequest, fetchOwnRequests, fetchOtherRequests, deleteRequest} from './actions/request_actions';
import {friendAccept} from './util/friendship_api_util';

import configureStore from './store/store.js';


document.addEventListener('DOMContentLoaded', () => {


  window.friendRequest = friendRequest;
  window.fetchOwnRequests = fetchOwnRequests;
  window.fetchOtherRequests = fetchOtherRequests;
  window.deleteRequest = deleteRequest;
  window.friendAccept = friendAccept;

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

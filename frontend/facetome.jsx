import React from 'react';
import ReactDOM from 'react-dom';
import {signup, login, logout} from './actions/session_actions';
import Root from './components/root';
import {deleteUser} from './util/session_api_util';
import {fetchProfile, updateProfile} from './actions/profile_actions';
import {friendRequest, fetchOwnRequests, fetchOtherRequests, deleteRequest} from './actions/request_actions';
import {acceptFriend, fetchFriends} from './actions/friendship_actions';
import {deleteFriend} from './util/friendship_api_util';
import {createPost} from './actions/post_actions';

import configureStore from './store/store.js';


document.addEventListener('DOMContentLoaded', () => {

  window.acceptFriend = acceptFriend;
  window.fetchFriends = fetchFriends;
  window.deleteFriend = deleteFriend;
  window.createPost = createPost;

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

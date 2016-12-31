import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import Root from './components/root';
import {deleteFriend, createPostTest} from './util/friendship_api_util';
import {createPost, fetchWall, deletePost} from './actions/post_actions';
import {createComment, deleteComment} from './actions/comment_actions';
import {createLike} from './util/like_api_util';
import {fetchAllProfiles} from './actions/profile_actions';
import {createMessage, fetchConvos} from './actions/convo_actions';

document.addEventListener('DOMContentLoaded', () => {

  window.fetchAllProfiles = fetchAllProfiles;
  window.createMessage = createMessage;
  window.fetchConvos = fetchConvos;

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

import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import Root from './components/root';
import {deleteFriend, createPostTest} from './util/friendship_api_util';
import {createPost, fetchWall, deletePost} from './actions/post_actions';
import {createComment, deleteComment} from './actions/comment_actions';

document.addEventListener('DOMContentLoaded', () => {

  window.createPost = createPost;
  window.createPostTest = createPostTest;
  window.fetchWall = fetchWall;
  window.deletePost = deletePost;
  window.createComment = createComment;
  window.deleteComment = deleteComment;

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

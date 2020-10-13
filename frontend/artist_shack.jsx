import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';


// TESTING START
import { signup, login, logout } from './actions/session_actions';
// TESTING END

document.addEventListener('DOMContentLoaded', () => {
  const store = window.currentUser ? createStore() : configureStore();
  const root = document.getElementById('root');

  // TESTING START
  window.signup = signup;
  window.login = login;
  window.logout = logout;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // TESTING END

  ReactDOM.render(<h1>Welcome to artist_shack</h1>, root);
});

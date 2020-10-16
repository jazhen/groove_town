import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

// TESTING START
import { signup, login, logout, demoLogin } from './actions/session_actions';
import { fetchUser } from './actions/user_actions';
// TESTING END

const createStore = () => {
  const preloadedState = {
    entities: {
      users: { [window.currentUser.id]: window.currentUser },
    },
    session: { id: window.currentUser.id },
  };

  delete window.currentUser;
  return configureStore(preloadedState);
};

document.addEventListener('DOMContentLoaded', () => {
  const store = window.currentUser ? createStore() : configureStore();
  const root = document.getElementById('root');

  // TESTING START
  window.signup = signup;
  window.login = login;
  window.logout = logout;
  window.demoLogin = demoLogin;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.fetchUser = fetchUser;
  // TESTING END

  ReactDOM.render(<Root store={store} />, root);
});

import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

const createStore = () => {
  const currentUser = Object.values(window.currentUser);

  const preloadedState = {
    entities: {
      users: {
        [currentUser[0].id]: currentUser[0],
      },
    },
    session: { id: currentUser[0].id },
  };

  delete window.currentUser;
  return configureStore(preloadedState);
};

document.addEventListener('DOMContentLoaded', () => {
  const store = window.currentUser ? createStore() : configureStore();
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});

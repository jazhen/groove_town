import React from 'react';
import { Link } from 'react-router-dom';

const AuthenticatedHeader = ({ logout }) => {
  return (
    <header>
      <div className="nav-bar">
        <Link className="nav-bar__index" to="/">
          artistshack
        </Link>
        <div className="nav-bar__search-bar">Seach Bar</div>
        <ul className="nav-bar__dropdown">
          <button className="nav-bar__dropdown-button">Dropdown</button>
          <li className="nav-bar__dropdown-list-item">
            <button
              className="nav-bar__logout"
              type="submit"
              onClick={logout()}>
              logout
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

const UnauthenticatedHeader = () => {
  return (
    <header className="header">
      <nav className="nav-bar">
        <ul className="nav-bar__list-left">
          <li className="nav-bar__list-left-item">
            <Link className="nav-bar__index" to="/">
              Artist Shack
            </Link>
          </li>
          <li className="nav-bar__list-item">
            <div className="nav-bar__search-bar" />
          </li>
        </ul>
        <ul className="nav-bar__list-right">
          <li className="nav-bar__list-right-item">
            <Link className="nav-bar__signup" to="/signup">
              signup
            </Link>
          </li>
          <li className="nav-bar__list-right-item">
            <Link className="nav-bar__login" to="/login">
              login
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

const Header = ({ currentUser, logout }) => {
  return currentUser ? (
    <AuthenticatedHeader logout={logout} />
  ) : (
    <UnauthenticatedHeader />
  );
};

export default Header;

import React from 'react';
import { Link } from 'react-router-dom';

const NavBarSiteList = () => {
  return (
    <ul className="nav-bar__site-list">
      <li className="nav-bar__site-list-item">
        <Link className="nav-bar__index" to="/">
          Artist Shack
        </Link>
      </li>
      <li className="nav-bar__site-list-item">
        <div className="nav-bar__search-bar">Search</div>
      </li>
    </ul>
  );
};

const AuthenticatedHeader = ({ logout }) => {
  return (
    <header className="header">
      <nav className="nav-bar">
        <NavBarSiteList />
        <ul className="nav-bar__dropdown">
          <button className="nav-bar__dropdown-button">Dropdown</button>
          <li className="nav-bar__dropdown-menu">
            <ul className="nav-bar__dropdown-content">
              <li className="nav-bar__dropdown-content-list-item">
                <Link className="nav-bar__dropdown-link" to="/">
                  view collection
                </Link>
              </li>
              <li className="nav-bar__dropdown-content-list-item">
                <button
                  className="nav-bar__logout"
                  type="submit"
                  onClick={logout}>
                  logout
                </button>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
};

const UnauthenticatedHeader = () => {
  return (
    <header className="header">
      <nav className="nav-bar">
        <NavBarSiteList />
        <ul className="nav-bar__user-list">
          <li className="nav-bar__user-list-item">
            <Link className="nav-bar__session-link" to="/signup">
              signup
            </Link>
          </li>
          <li className="nav-bar__user-list-item">
            <Link className="nav-bar__session-link" to="/login">
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

import React from 'react';
import { Link } from 'react-router-dom';

const NavBarSiteList = () => {
  return (
    <>
      <div className="nav-bar__index">
        <Link className="nav-bar__index-link" to="/">
          groovetown
        </Link>
      </div>
      <div className="nav-bar__search-bar">
        <input
          className="nav-bar__search-bar-input"
          placeholder="Search and discover music"
        />
        <button className="nav-bar__search-bar-icon">
          <i className="fas fa-search" />
        </button>
      </div>
    </>
  );
};

const AuthenticatedHeader = ({ currentUserId, logout }) => {
  return (
    <header className="header">
      <nav className="nav-bar">
        <NavBarSiteList />
        <ul className="nav-bar__dropdown">
          <button className="nav-bar__dropdown-button">
            <svg
              width="2em"
              height="2em"
              viewBox="0 0 16 16"
              className="bi bi-music-note-beamed"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M6 13c0 1.105-1.12 2-2.5 2S1 14.105 1 13c0-1.104 1.12-2 2.5-2s2.5.896 2.5 2zm9-2c0 1.105-1.12 2-2.5 2s-2.5-.895-2.5-2 1.12-2 2.5-2 2.5.895 2.5 2z" />
              <path fillRule="evenodd" d="M14 11V2h1v9h-1zM6 3v10H5V3h1z" />
              <path d="M5 2.905a1 1 0 0 1 .9-.995l8-.8a1 1 0 0 1 1.1.995V3L5 4V2.905z" />
            </svg>
          </button>
          <li className="nav-bar__dropdown-menu">
            <ul className="nav-bar__dropdown-content">
              <li className="nav-bar__dropdown-content-list-item">
                <Link
                  className="nav-bar__dropdown-link"
                  to={`/users/${currentUserId}`}>
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
    <AuthenticatedHeader currentUserId={currentUser.id} logout={logout} />
  ) : (
    <UnauthenticatedHeader />
  );
};

export default Header;

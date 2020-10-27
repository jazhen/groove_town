import React from 'react';
import { Link } from 'react-router-dom';

const NavBarSiteList = () => {
  return (
    <>
      <div className="nav-bar__index">
        <Link className="nav-bar__index-link" to="/">
          <i className="fas fa-music nav-bar__fa-music" />
          groovetown
        </Link>
      </div>
      <div className="nav-bar__search-bar">
        <input
          className="nav-bar__search-bar-input"
          placeholder="Search and discover music"
        />
        <button type="button" className="nav-bar__search-bar-icon">
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
          <a className="nav-bar__dropdown-button" tabIndex="0">
            <img
              src="https://groove-town-seeds.s3-us-west-1.amazonaws.com/general/default-profile-pic.svg"
              className="nav-bar__profile-picture"
              alt="default profile"
            />
          </a>
          <li className="nav-bar__dropdown-menu">
            <ul className="nav-bar__dropdown-content">
              <li className="nav-bar__dropdown-content-list-item">
                <Link
                  className="nav-bar__dropdown-link"
                  to={`/users/${currentUserId}`}
                >
                  view collection
                </Link>
              </li>
              <li className="nav-bar__dropdown-content-list-item">
                <button
                  className="nav-bar__logout"
                  type="submit"
                  onClick={logout}
                >
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
    <AuthenticatedHeader
      currentUserId={currentUser.id}
      logout={logout}
    />
  ) : (
    <UnauthenticatedHeader />
  );
};

export default Header;

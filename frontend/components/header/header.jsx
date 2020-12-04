import React from 'react';
import { Link } from 'react-router-dom';
import SearchBarContainer from '../search/search_bar_container';

const NavBarSiteList = () => {
  return (
    <>
      <div className="nav-bar__index">
        <Link className="nav-bar__index-link" to="/">
          <i className="fas fa-music nav-bar__fa-music" />
          groovetown
        </Link>
      </div>
      <SearchBarContainer />
    </>
  );
};

const AuthenticatedHeader = ({ currentUser, logout }) => {
  return (
    <ul className="nav-bar__dropdown">
      <button type="button" className="nav-bar__dropdown-button" tabIndex="0">
        <img
          src={currentUser.avatarUrl}
          className="nav-bar__profile-picture"
          alt="profile pic"
        />
      </button>
      <li className="nav-bar__dropdown-menu">
        <ul className="nav-bar__dropdown-content">
          <li className="nav-bar__dropdown-content-list-item">
            <Link
              to={`/users/${currentUser.id}`}
              className="nav-bar__dropdown-link"
            >
              view collection
            </Link>
          </li>
          <li className="nav-bar__dropdown-content-list-item">
            <Link to="/albums/new" className="nav-bar__dropdown-link">
              add music
            </Link>
          </li>
          <li className="nav-bar__dropdown-content-list-item">
            <Link
              to={`/users/${currentUser.id}`}
              className="nav-bar__dropdown-link"
            >
              edit profile
            </Link>
          </li>
          <li className="nav-bar__dropdown-content-list-item">
            <Link to="/">
              <button
                className="nav-bar__logout"
                type="submit"
                onClick={logout}
              >
                logout
              </button>
            </Link>
          </li>
        </ul>
      </li>
    </ul>
  );
};

const UnauthenticatedHeader = () => {
  return (
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
  );
};

const Header = ({ currentUser, logout }) => {
  return (
    <header className="header">
      <nav className="nav-bar">
        <NavBarSiteList />
        {currentUser ? (
          <AuthenticatedHeader currentUser={currentUser} logout={logout} />
        ) : (
          <UnauthenticatedHeader />
        )}
      </nav>
    </header>
  );
};

export default Header;

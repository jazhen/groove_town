import React from 'react';
import { Link } from 'react-router-dom';

// const NavBarSiteList = () => {
//   return (
//     <ul className="nav-bar__site-list">
//       <li className="nav-bar__site-list-item">
//         <Link className="nav-bar__index" to="/">
//           Artist Shack
//         </Link>
//       </li>
//       <li className="nav-bar__site-list-item">
//         <div className="nav-bar__search-bar">Search</div>
//       </li>
//     </ul>
//   );
// };

const AuthenticatedHeader = ({ currentUserId, logout }) => {
  return (
    <header className="header">
      <nav className="nav-bar">
        <div className="nav-bar__index">
          <Link className="nav-bar__index-link" to="/">
            Artist Shack
          </Link>
        </div>
        <ul className="nav-bar__dropdown">
          <button className="nav-bar__dropdown-button">Dropdown</button>
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
        <div className="nav-bar__search-bar">
          <input
            className="nav-bar__search-bar-input"
            placeholder="Search and discover music"
          />
          <button className="nav-bar__search-bar-icon">
            <span className="glyphicon glyphicon-search" />
          </button>
        </div>
      </nav>
    </header>
  );
};

const UnauthenticatedHeader = () => {
  return (
    <header className="header">
      <nav className="nav-bar">
        <div className="nav-bar__index">
          <Link className="nav-bar__index-link" to="/">
            Artist Shack
          </Link>
        </div>
        <div className="nav-bar__search-bar">
          <input
            className="nav-bar__search-bar-input"
            placeholder="Search and discover music"
          />
          <button className="nav-bar__search-bar-icon">
            <span className="glyphicon glyphicon-search" />
          </button>
        </div>
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

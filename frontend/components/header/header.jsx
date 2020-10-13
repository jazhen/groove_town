import React from 'react';
import { Link } from 'react-router-dom';

const AuthenticatedHeader = ({ logout }) => {
  return (
    <header>
      <div className="navbar">
        <Link to="/">artistshack</Link>
        <div>Seach Bar</div>
        <div className="dropdown">
          <button className="dropdown-button">Dropdown</button>
          <div className="dropdown-content">
            <button type="submit" onClick={logout()} />
          </div>
        </div>
      </div>
    </header>
  );
};

const UnauthenticatedHeader = () => {
  return (
    <header>
      <div className="navbar">
        <Link to="/">artistshack</Link>
        <div>Seach Bar</div>
        <Link to="/signup">sign up</Link>
        <Link to="/login">log in</Link>
      </div>
    </header>
  );
};

const Header = ({ currentUser, logout }) => {
  if (currentUser) return <AuthenticatedHeader />;
  return <UnauthenticatedHeader logout={logout} />;
};

export default Header;

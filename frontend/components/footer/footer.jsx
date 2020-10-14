import React from 'react';
import { Link } from 'react-router-dom';

const AuthenticatedFooter = ({ logout }) => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <ul className="footer-container__menu">
          <li className="footer-container__menu-item">
            <button
              className="footer-container__logout"
              onClick={() => logout()}>
              Log out
            </button>
          </li>
        </ul>
      </div>
    </footer>
  );
};

const UnauthenticatedFooter = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <Link className="footer-container__link" to="/login">
          Log in
        </Link>
      </div>
    </footer>
  );
};

const Footer = ({ currentUser, logout }) => {
  return currentUser ? (
    <AuthenticatedFooter logout={logout} />
  ) : (
    <UnauthenticatedFooter />
  );
};

export default Footer;

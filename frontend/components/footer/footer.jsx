import React from 'react';
import { Link } from 'react-router-dom';

const AuthenticatedFooter = ({ logout }) => {
  return (
    <footer className="footer-container">
      <div className="footer">
        <ul className="footer__menu">
          <li className="footer__menu-item">
            <button className="footer__logout" onClick={() => logout()}>
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
    <footer className="footer-container">
      <div className="footer">
        <Link className="footer__link" to="/login">
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

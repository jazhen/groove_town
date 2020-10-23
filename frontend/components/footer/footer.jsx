import React from 'react';
import { Link } from 'react-router-dom';

const AuthenticatedFooter = ({ logout }) => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <ul className="footer__credentials-menu">
          <li className="footer__credentials-menu-item">
            <span>Clone of </span>
            <Link to="https://bandcamp.com/" className="footer__link">
              bandcamp
            </Link>
          </li>
          <li className="footer__credentials-menu-item">
            <Link
              to="https://github.com/jazhen/groove_town"
              className="footer__link">
              Github
            </Link>
          </li>
        </ul>
        <ul className="footer__site-menu">
          <li className="footer__site-menu-item">
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
    <footer className="footer">
      <div className="footer__container">
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

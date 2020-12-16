import React from 'react';
import { Link } from 'react-router-dom';

const FooterCredentials = () => {
  return (
    <>
      <div className="footer__link-container footer__bandcamp">
        <i className="fab fa-bandcamp footer__icon" />
        <a
          target="_blank"
          rel="noreferrer"
          href="https://bandcamp.com/"
          className="footer__link"
        >
          Inspired by bandcamp
        </a>
      </div>

      <div className="footer__link-container">
        <i className="fab fa-github footer__icon" />
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/jazhen/groove_town/"
          className="footer__link"
        >
          Github
        </a>
      </div>

      <div className="footer__link-container">
        <i className="fab fa-linkedin footer__icon" />
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/jazhen/"
          className="footer__link"
        >
          Linkedin
        </a>
      </div>

      <div className="footer__link-container">
        <i className="fab fa-angellist footer__icon" />
        <a
          target="_blank"
          rel="noreferrer"
          href="https://angel.co/u/jazhen"
          className="footer__link"
        >
          AngelList
        </a>
      </div>
    </>
  );
};

const AuthenticatedFooter = ({ logout }) => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <FooterCredentials />
        <Link to="/">
          <button
            type="button"
            onClick={logout}
            className="footer__session-action footer__logout"
          >
            Log out
          </button>
        </Link>
      </div>
    </footer>
  );
};

const UnauthenticatedFooter = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <FooterCredentials />
        <Link to="/login" className="footer__session-action footer__link">
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

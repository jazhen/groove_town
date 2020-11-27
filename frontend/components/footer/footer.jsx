import React from 'react';
import { Link } from 'react-router-dom';

const FooterCredentials = () => {
  return (
    <>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://bandcamp.com/"
        className="footer__link"
      >
        <i className="fab fa-bandcamp footer__icon" />
        Clone of bandcamp
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://github.com/jazhen/groove_town/"
        className="footer__link"
      >
        <i className="fab fa-github footer__icon" />
        Github
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/in/jazhen/"
        className="footer__link"
      >
        <i className="fab fa-linkedin footer__icon" />
        Linkedin
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://angel.co/u/jazhen"
        className="footer__link"
      >
        <i className="fab fa-angellist footer__icon" />
        AngelList
      </a>
    </>
  );
};

const AuthenticatedFooter = ({ logout }) => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <FooterCredentials />
        <button type="button" onClick={logout} className="footer__logout">
          Log out
        </button>
      </div>
    </footer>
  );
};

const UnauthenticatedFooter = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <FooterCredentials />
        <Link to="/login" className="footer__link">
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

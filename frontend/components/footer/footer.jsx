import React from 'react';
import { Link } from 'react-router-dom';

const AuthenticatedFooter = () => {
  return (
    <footer className="footer-container">
      <div className="footer">
        <Link className="footer__link" to="/logout">
          Log out
        </Link>
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

const Footer = ({ currentUser }) => {
  return currentUser ? <AuthenticatedFooter /> : <UnauthenticatedFooter />;
};

export default Footer;

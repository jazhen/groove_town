import React from 'react';
import { Link } from 'react-router-dom';

const SessionHeader = () => {
  return (
    <header className="session-header ">
      <div className="session-header__container">
        <Link className="session-header__link" to="/">
          <img className="nav-bar__logo" src="/logo_small.png" alt="logo" />
        </Link>
      </div>
    </header>
  );
};

export default SessionHeader;

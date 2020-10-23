import React from 'react';
import { Link } from 'react-router-dom';

const SessionHeader = () => {
  return (
    <header className="session-header ">
      <div className="session-header__container">
        <Link className="session-header__link" to="/">
          <i className="fas fa-music session-header__fa-music" />
          groovetown
        </Link>
      </div>
    </header>
  );
};

export default SessionHeader;

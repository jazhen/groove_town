import React from 'react';

export const SessionErrors = ({ field, errors }) => {
  return errors ? (
    <div className="session-form__errors session-form--right">
      <span className="session-form__errors-span">{errors[field]}</span>
    </div>
  ) : (
    <div className="session-form__errors session-form--right" />
  );
};

export const inputClassName = (field, errors) => {
  if (errors[field]) {
    return `session-form__input session-form--right session-form__input--error`;
  }
  return `session-form__input session-form--right`;
};

export const DemoUser = ({ demoLogin }) => {
  return (
    <div className="session-form__demo">
      <span className="session-form__demo-span">Log in as a&nbsp;</span>
      <button className="session-form__demo-button" onClick={() => demoLogin()}>
        demo user.
      </button>
    </div>
  );
};

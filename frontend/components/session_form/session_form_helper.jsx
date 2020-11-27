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
    return `session-form__input session-form--right session-form--box session-form__input--error`;
  }
  return `session-form__input session-form--right session-form--box`;
};

export const DemoUser = ({ demoLogin }) => {
  return (
    <div className="session-form__item">
      <div className="session-form__placeholder session-form--left" />
      <button
        type="submit"
        className="session-form__button session-form__button--demo session-form--box session-form--right"
        onClick={() => demoLogin()}
      >
        Log in as a demo user
      </button>
    </div>
  );
};

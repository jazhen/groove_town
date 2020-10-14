import React from 'react';

export const SessionErrors = ({ formType, field, errors }) => {
  return errors ? (
    <div className={`${formType}-form__${field}-errors session-form--errors`}>
      {errors[field]}
    </div>
  ) : (
    <div className={`${formType}-form__${field}-errors session-form--errors`} />
  );
};

export const inputClassName = (formType, field, errors) => {
  if (errors[field]) {
    return `${formType}-form__${field}-input session-form-input--error`;
  }
  return `${formType}-form__${field}-input`;
};

export const DemoUser = ({ demoLogin }) => {
  return (
    <div className="demo-form-nav">
      <span className="demo-form-nav__text">
        Don&apos;t want to make an account?&nbsp;
        <button
          className="demo-form-nav__button demo-form-nav__button--link"
          onClick={() => demoLogin()}>
          Log in as a demo user.
        </button>
      </span>
    </div>
  );
};
import React from 'react';

export const SessionErrors = ({ formType, field, errors }) => {
  return errors ? (
    <div className={`${formType}-form__${field}-errors`}>{errors[field]}</div>
  ) : null;
};

export const inputClassName = (formType, field, errors) => {
  if (errors[field]) {
    return `${formType}-form__${field}-input ${formType}-form__${field}-input--error`;
  }
  return `${formType}-form__${field}-input`;
};

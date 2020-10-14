import React from 'react';
import { Link } from 'react-router-dom';
import { SessionErrors, inputClassName, DemoUser } from './session_form_helper';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      username_or_email: '',
      password: '',
    };
  }

  handleSubmit(e) {
    const { processForm } = this.props;
    const user = { ...this.state };
    e.preventDefault();
    processForm(user);
  }

  handleFieldChange(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  render() {
    const { usernameOrEmail, password } = this.state;
    const { formType, errors, demoLogin } = this.props;

    return (
      <div className="session-form-container">
        <div className="session-form-outer-container">
          <div className="session-form__header">
            <div className="session-form__header-placeholder session-form--left" />
            <div className="session-form__header-title session-form--right">
              Log in
            </div>
          </div>
          <div className="session-form__header-divider" />
          <div className="session-form-inner-container">
            <form className="session-form" onSubmit={this.handleSubmit}>
              <ul className="session-form__list">
                <li className="session-form__username-list-item session-form__list-item">
                  <label
                    className="session-form__username-label session-form--left"
                    htmlFor="username">
                    <div className="session-form__username-title-container">
                      <span className="session-form__username-title">
                        Username / email
                      </span>
                    </div>
                  </label>
                  <input
                    type="text"
                    className={`${inputClassName(
                      formType,
                      'username',
                      errors
                    )} session-form--right`}
                    id="username"
                    value={usernameOrEmail}
                    onChange={this.handleFieldChange('username_or_email')}
                  />
                </li>
                <li className="session-form__pasword-list-item session-form__list-item">
                  <label
                    className="session-form__pasword-label session-form--left"
                    htmlFor="pasword">
                    <div className="session-form__pasword-title-container">
                      <span className="session-form__pasword-title">
                        Password
                      </span>
                    </div>
                  </label>{' '}
                  <input
                    type="password"
                    className={`${inputClassName(
                      formType,
                      'password',
                      errors
                    )} session-form--right`}
                    id="password"
                    value={password}
                    onChange={this.handleFieldChange('password')}
                  />
                </li>
                <li className="session-form__button-list-item session-form__list-item">
                  <div className="session-form__placeholder session-form--left" />
                  <button
                    className="session-form__button session-form--right"
                    type="submit">
                    Log in
                  </button>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SessionForm;

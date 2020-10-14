import React from 'react';
import { Link } from 'react-router-dom';
import { SessionErrors, inputClassName, DemoUser } from './session_form_helper';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      email: '',
      password: '',
      username: '',
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
    const { email, password, username } = this.state;
    const { formType, errors, demoLogin } = this.props;

    return (
      <div className="session-form-container">
        <div className="session-form__inner-container">
          <form className="session-form" onSubmit={this.handleSubmit}>
            <div className="session-form__header">
              <span className="session-form__header-text">Sign up</span>
            </div>
            <label className="session-form__email-label" htmlFor="email">
              <span className="session-form__email-title session-form--title">
                Email address
              </span>
              <input
                type="text"
                className={`${inputClassName(
                  formType,
                  'email',
                  errors
                )} session-form--input`}
                id="session-form__email-label"
                value={email}
                onChange={this.handleFieldChange('email')}
              />
              <SessionErrors
                formType={formType}
                field="email"
                errors={errors}
              />
            </label>
            <label
              className="session-form__password-label"
              htmlFor="session-form__password-label">
              <span className="session-form__password-title session-form--title">
                Password
              </span>
              <input
                type="password"
                className={`${inputClassName(
                  formType,
                  'password',
                  errors
                )} session-form--input`}
                id="session-form__password-label"
                value={password}
                onChange={this.handleFieldChange('password')}
              />
              <SessionErrors
                formType={formType}
                field="password"
                errors={errors}
              />
            </label>
            <label
              className="session-form__username-label"
              htmlFor="session-form__username-label">
              <span className="session-form__username-title session-form--title">
                Username
              </span>
              <input
                type="text"
                className={`${inputClassName(
                  formType,
                  'username',
                  errors
                )} session-form--input`}
                id="session-form__username-label"
                value={username}
                onChange={this.handleFieldChange('username')}
              />
              <SessionErrors
                formType={formType}
                field="username"
                errors={errors}
              />
            </label>
            <button className="session-form__button" type="submit">
              Sign in
            </button>
          </form>
          <div className="login-form-nav">
            <span className="login-form-nav__text">
              Already have an account?&nbsp;
              <Link className="login-form-nav__link" to="/login">
                Log in.
              </Link>
            </span>
            <DemoUser demoLogin={demoLogin} />
          </div>
        </div>
      </div>
    );
  }
}

export default SessionForm;

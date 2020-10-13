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
      <div className="signup-form-container">
        <form className="signup-form" onSubmit={this.handleSubmit}>
          <h1 className="signup-form__header">Sign up</h1>
          <label className="signup-form__email-label" htmlFor="email">
            <span className="signup-form__email-title">Email address</span>
            <input
              type="text"
              className={inputClassName(formType, 'email', errors)}
              id="signup-form__email-label"
              value={email}
              onChange={this.handleFieldChange('email')}
            />
            <SessionErrors formType={formType} field="email" errors={errors} />
          </label>
          <label
            className="signup-form__password-label"
            htmlFor="signup-form__password-label">
            <span className="signup-form__password-title">Password</span>
            <input
              type="password"
              className={inputClassName(formType, 'password', errors)}
              id="signup-form__password-label"
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
            className="signup-form__username-label"
            htmlFor="signup-form__username-label">
            <span className="signup-form__username-title">Username</span>
            <input
              type="text"
              className={inputClassName(formType, 'username', errors)}
              id="signup-form__username-label"
              value={username}
              onChange={this.handleFieldChange('username')}
            />
            <SessionErrors
              formType={formType}
              field="username"
              errors={errors}
            />
          </label>
          <button className="signup-form__button" type="submit">
            Submit
          </button>
        </form>
        <div className="login-form-nav">
          <span className="login-form-nav__text">
            Already have an account?&nbsp;
            <Link className="login-form-nav__link" to="/login">
              Log in.
            </Link>
          </span>
        </div>
        <DemoUser demoLogin={demoLogin} />
      </div>
    );
  }
}

export default SessionForm;

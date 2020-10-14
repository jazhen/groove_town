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
      <div className="login-form-container">
        <form className="login-form" onSubmit={this.handleSubmit}>
          <h1 className="login-form__header">Log in</h1>
          <label className="login-form__username-label" htmlFor="username">
            <span className="login-form__username-title">Username / email</span>
            <input
              type="text"
              className={inputClassName(formType, 'username', errors)}
              id="username"
              value={usernameOrEmail}
              onChange={this.handleFieldChange('username_or_email')}
            />
            <SessionErrors
              formType={formType}
              field="username"
              errors={errors}
            />
          </label>
          <label className="login-form__password-label" htmlFor="password">
            <span className="login-form__password-title">password</span>
            <input
              type="password"
              className={inputClassName(formType, 'username', errors)}
              id="password"
              value={password}
              onChange={this.handleFieldChange('password')}
            />
            <SessionErrors
              formType={formType}
              field="password"
              errors={errors}
            />
          </label>
          <button className="login-form__button" type="submit">
            Submit
          </button>
        </form>
        <div className="signup-form-nav">
          <span className="signup-form-nav__text">
            Don&apos;t have an account?&nbsp;
            <Link className="signup-form-nav__link" to="/signup">
              Sign up.
            </Link>
          </span>
        </div>
        <DemoUser demoLogin={demoLogin} />
      </div>
    );
  }
}

export default SessionForm;

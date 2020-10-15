import React from 'react';
import { Link } from 'react-router-dom';
import { SessionErrors, inputClassName, DemoUser } from './session_form_helper';

class LogInForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      username_or_email: '',
      password: '',
    };
  }

  componentWillUnmount() {
    this.props.clearErrors();
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
    const { errors, demoLogin } = this.props;

    return (
      <div className="session-form">
        <div className="session-form__container">
          <div className="session-form__header">
            <div className="session-form__placeholder session-form--left" />
            <div className="session-form__header-span-container session-form--right">
              <span className="session-form__header-span">Log in</span>
            </div>
          </div>
          <div className="session-form__header-divider" />
          <div className="session-form__inner-container">
            <form className="session-form__form" onSubmit={this.handleSubmit}>
              <div className="session-form__item">
                <label
                  className="session-form__label session-form--left"
                  htmlFor="session-form__label-username">
                  <div className="session-form__span-container">
                    <span className="session-form__span">Username / Email</span>
                  </div>
                </label>
                <input
                  type="text"
                  className={inputClassName('username', errors)}
                  id="session-form__label-username"
                  value={usernameOrEmail}
                  onChange={this.handleFieldChange('username_or_email')}
                />
              </div>
              <div className="session-form__errors">
                <div className="session-form__placeholder session-form--left" />
                <SessionErrors field="username" errors={errors} />
              </div>
              <div className="session-form__item">
                <label
                  className="session-form__label session-form--left"
                  htmlFor="session-form__label-password">
                  <div className="session-form__span-container">
                    <span className="session-form__span">Password</span>
                  </div>
                </label>
                <input
                  type="password"
                  className={inputClassName('password', errors)}
                  id="session-form__label-password"
                  value={password}
                  onChange={this.handleFieldChange('password')}
                />
              </div>
              <div className="session-form__errors">
                <div className="session-form__placeholder session-form--left" />
                <SessionErrors field="password" errors={errors} />
              </div>
              <div className="session-form__item">
                <div className="session-form__placeholder session-form--left" />
                <button
                  className="session-form__button session-form--right"
                  type="submit">
                  Log in
                </button>
              </div>
            </form>
            <DemoUser demoLogin={demoLogin} />
            <div className="session-form__other-sessions">
              <div className="session-form__placeholder session-form--left" />
              <div className="session-form__other-sessions-container session-form--right">
                <span className="session-form__other-sessions-span">
                  Don&apos;t have an account?&nbsp;
                  <Link
                    className="session-form__other-sessions-link"
                    to="/signup">
                    Sign up.
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LogInForm;

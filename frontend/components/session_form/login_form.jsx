import React from 'react';
import { Link, Redirect } from 'react-router-dom';

const SessionErrors = ({ errors, field }) => {
  return errors.responseJSON ? <span>{errors.responseJSON[field]}</span> : null;
};

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      username_or_password: '',
      password: '',
    };
  }

  handleSubmit(e) {
    const { login, history } = this.props;
    const user = { ...this.state };

    e.preventDefault();
    login(user);
    history.push('/');
  }

  handleFieldChange(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  render() {
    const { usernameOrEmail, password } = this.state;
    const { formType, errors } = this.props;

    return (
      <form className="login-form parent" onSubmit={this.handleSubmit}>
        <h1 className="login-form__header div1">{formType}</h1>
        <label className="login-form__username-label div2" htmlFor="username">
          <span className="login-form__username-title">Username / email</span>
          <input
            type="text"
            className="login-form__username-input"
            // {errors.username ? 'invalid' : 'valid'}
            id="username"
            value={usernameOrEmail}
            onChange={this.handleFieldChange('username_or_password')}
          />
          {/* <SessionErrors errors={errors} field="username" /> */}
        </label>
        <label className="login-form__password-label div3" htmlFor="password">
          <span className="login-form__password-title">password</span>
          <input
            type="password"
            className="login-form__password-input"
            // {errors.password ? 'invalid' : 'valid'}
            id="password"
            value={password}
            onChange={this.handleFieldChange('password')}
          />
          {/* <SessionErrors errors={errors} field="password" /> */}
        </label>
        <button className="login-form__button div4" type="submit">
          Submit
        </button>
      </form>
    );
  }
}

export default SessionForm;

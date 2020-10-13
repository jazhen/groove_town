import React from 'react';
import { Link, Redirect } from 'react-router-dom';

const LinkToOtherFormType = ({ formType }) => {
  return formType === 'Log in' ? (
    <Link to="/signup">Sign up</Link>
  ) : (
    <Link to="/login">Log in</Link>
  );
};

const SessionErrors = ({ errors, field }) => {
  return errors.responseJSON ? <span>{errors.responseJSON[field]}</span> : null;
};

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
    const { processForm, history } = this.props;
    const user = { ...this.state };

    e.preventDefault();
    processForm(user);
    // history.push('/');
  }

  handleFieldChange(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  render() {
    const { email, password, username } = this.state;
    const { formType, errors } = this.props;

    return (
      <div>
        {/* <LinkToOtherFormType formType={formType} /> */}
        <form onSubmit={this.handleSubmit}>
          <h1>{formType}</h1>
          <label htmlFor="email">
            <span>Email address</span>
            <input
              type="email"
              className={errors.email ? 'invalid' : 'valid'}
              id="email"
              value={email}
              onChange={this.handleFieldChange('email')}
            />
            {/* <SessionErrors errors={errors} field="email" /> */}
          </label>
          <label htmlFor="password">
            <span>Password</span>
            <input
              type="password"
              className={errors.password ? 'invalid' : 'valid'}
              id="password"
              value={password}
              onChange={this.handleFieldChange('password')}
            />
            {/* <SessionErrors errors={errors} field="password" /> */}
          </label>
          <label htmlFor="username">
            <span>Username</span>
            <input
              type="text"
              className={errors.username ? 'invalid' : 'valid'}
              id="username"
              value={username}
              onChange={this.handleFieldChange('username')}
            />
            {/* <SessionErrors errors={errors} field="username" /> */}
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default SessionForm;

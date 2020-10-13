import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HeaderContainer from './header/header_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';

const App = () => {
  return (
    <>
      <HeaderContainer />

      <Switch>
        <Route path="/login" component={LoginFormContainer} />
        <Route path="/signup" component={SignupFormContainer} />
      </Switch>
    </>
  );
};

export default App;

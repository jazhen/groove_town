import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import HeaderContainer from './header/header_container';
import FooterContainer from './footer/footer_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import { AuthRoute } from '../util/route_util';
import SessionHeader from './header/session_header';

const App = (props) => {
  const {
    location: { pathname },
  } = props;

  return (
    <>
      {['/login', '/signup'].includes(pathname) ? (
        <SessionHeader />
      ) : (
        <HeaderContainer />
      )}
      <main className="main">
        <Switch>
          <AuthRoute exact path="/login" component={LoginFormContainer} />
          <AuthRoute exact path="/signup" component={SignupFormContainer} />
          <Route path="/" />
        </Switch>
      </main>
      <FooterContainer />
    </>
  );
};

export default withRouter(App);

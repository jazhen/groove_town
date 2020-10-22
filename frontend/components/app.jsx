import React from 'react';
import {
  Redirect,
  Route,
  Switch,
  useLocation,
  withRouter,
} from 'react-router-dom';
import HeaderContainer from './header/header_container';
import FooterContainer from './footer/footer_container';
import SplashContainer from './splash/splash_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import UserShowContainer from './user/user_show_container';
import { AuthRoute } from '../util/route_util';
import SessionHeader from './header/session_header';
import AlbumShowContainer from './album/album_show_container';

const Header = ({ pathname }) => {
  return ['/login', '/signup'].includes(pathname) ? (
    <SessionHeader />
  ) : (
    <HeaderContainer />
  );
};

const App = () => {
  return (
    <>
      <Header pathname={useLocation().pathname} />
      <main className="main">
        <Switch>
          <AuthRoute exact path="/login" component={LoginFormContainer} />
          <AuthRoute exact path="/signup" component={SignupFormContainer} />
          <Route
            path="/users/:userId/albums/:albumId"
            component={AlbumShowContainer}
          />
          <Route path="/users/:userId" component={UserShowContainer} />
          <Route exact path="/" component={SplashContainer} />
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </main>
      <FooterContainer />
    </>
  );
};

export default withRouter(App);

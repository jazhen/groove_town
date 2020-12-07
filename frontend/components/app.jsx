import React from 'react';
import {
  Redirect,
  Route,
  Switch,
  useLocation,
  withRouter,
} from 'react-router-dom';
import { connect } from 'react-redux';
import HeaderContainer from './header/header_container';
import FooterContainer from './footer/footer_container';
import SplashContainer from './splash/splash_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import UserShowContainer from './user/user_show_container';
import AlbumShowContainer from './album_show/album_show_container';
import AlbumCreateContainer from './album_create/album_create_container';
import AlbumUpdateContainer from './album_update/album_update_container';
import SessionHeader from './header/session_header';
import { AuthRoute } from '../util/route_util';
import Loading from './loading/loading';

const Header = ({ pathname }) => {
  return ['/login', '/signup'].includes(pathname) ? (
    <SessionHeader />
  ) : (
    <HeaderContainer />
  );
};

const App = ({ loading }) => {
  const { pathname } = useLocation();

  return (
    <>
      <Header pathname={pathname} />
      <main className="main">
        <Switch>
          <Route exact path="/" component={SplashContainer} />
          <AuthRoute exact path="/login" component={LoginFormContainer} />
          <AuthRoute exact path="/signup" component={SignupFormContainer} />
          <Route
            path="/users/:userId/albums/:albumId"
            component={AlbumShowContainer}
          />
          <Route
            path="/albums/:albumId/edit"
            component={AlbumUpdateContainer}
          />
          <Route path="/users/:userId" component={UserShowContainer} />
          <Route path="/albums/new" component={AlbumCreateContainer} />
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </main>
      <FooterContainer />
      {loading ? <Loading /> : null}
    </>
  );
};

const mapStateToProps = ({ ui: { loading } }) => {
  return {
    loading: loading.form,
  };
};

export default connect(mapStateToProps, null)(withRouter(App));

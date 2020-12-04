import { connect } from 'react-redux';
import LogInForm from './login_form';
import {
  demoLogin,
  login,
  clearSessionErrors,
} from '../../actions/session_actions';

const mapStateToProps = ({ ui: { errors } }) => ({
  errors: errors.session,
});

const mapDispatchToProps = (dispatch) => ({
  processForm: (user) => dispatch(login(user)),
  demoLogin: () => dispatch(demoLogin()),
  clearSessionErrors: () => dispatch(clearSessionErrors()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LogInForm);

import { connect } from 'react-redux';
import SignUpForm from './signup_form';
import {
  demoLogin,
  signup,
  clearSessionErrors,
} from '../../actions/session_actions';

const mapStateToProps = (state) => ({
  errors: state.errors.session,
});

const mapDispatchToProps = (dispatch) => ({
  processForm: (user) => dispatch(signup(user)),
  demoLogin: () => dispatch(demoLogin()),
  clearSessionErrors: () => dispatch(clearSessionErrors()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);

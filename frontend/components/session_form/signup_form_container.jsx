import { connect } from 'react-redux';
import SignUpForm from './signup_form';
import { demoLogin, signup, clearErrors } from '../../actions/session_actions';

const mapStateToProps = (state) => ({
  errors: state.errors.session,
});

const mapDispatchToProps = (dispatch) => ({
  processForm: (user) => dispatch(signup(user)),
  demoLogin: () => dispatch(demoLogin()),
  clearErrors: () => dispatch(clearErrors()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);

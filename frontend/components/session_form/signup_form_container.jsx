import { connect } from 'react-redux';
import SignUpForm from './signup_form';
import { demoLogin, signup } from '../../actions/session_actions';

const mapStateToProps = (state) => ({
  errors: state.errors.session,
  formType: 'signup',
});

const mapDispatchToProps = (dispatch) => ({
  processForm: (user) => dispatch(signup(user)),
  demoLogin: () => dispatch(demoLogin()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);

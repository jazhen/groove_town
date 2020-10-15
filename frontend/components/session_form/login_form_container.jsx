import { connect } from 'react-redux';
import LogInForm from './login_form';
import { demoLogin, login } from '../../actions/session_actions';

const mapStateToProps = (state) => ({
  errors: state.errors.session,
});

const mapDispatchToProps = (dispatch) => ({
  processForm: (user) => dispatch(login(user)),
  demoLogin: () => dispatch(demoLogin()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LogInForm);

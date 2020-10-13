import { connect } from 'react-redux';
import Footer from './footer';

const mapStateToProps = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id],
  };
};

export default connect(mapStateToProps, null)(Footer);

import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import AlbumCreate from './album_create';

const mapStateToProps = ({ entities: { users, albums, tracks } }) => {
  return {
    users,
    albums,
    tracks,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchUser: (userId) => dispatch(fetchUser(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AlbumCreate);

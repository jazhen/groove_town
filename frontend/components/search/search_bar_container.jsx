import { connect } from 'react-redux';
import { fetchAlbums } from '../../actions/album_actions';
import SearchBar from './search_bar';

const mapStateToProps = ({ entities: { users, albums, tracks } }) => {
  return {
    users,
    albums,
    tracks,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchAlbums: () => dispatch(fetchAlbums()),
  // fetchUser: (userId) => dispatch(fetchUser(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);

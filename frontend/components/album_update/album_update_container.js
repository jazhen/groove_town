import { connect } from 'react-redux';
import { fetchAlbum } from '../../actions/album_actions';
import AlbumUpdate from './album_update';

const mapStateToProps = (
  {
    entities: { users, albums },
    // errors,
    session: { id },
  },
  { match: { params } }
) => {
  return {
    user: users[id],
    albums,
    albumId: params.albumId,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchAlbum: (albumId) => dispatch(fetchAlbum(albumId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AlbumUpdate);

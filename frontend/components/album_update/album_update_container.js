import { connect } from 'react-redux';
import {
  fetchAlbum,
  clearAlbumErrors,
  clearAllAlbumErrors,
  createAlbum,
} from '../../actions/album_actions';
import AlbumUpdate from './album_update';

const mapStateToProps = (
  {
    entities: { users, albums, tracks },
    ui: { errors, loading },
    session: { id },
  },
  { match: { params } }
) => {
  return {
    user: users[id],
    oldAlbum: albums[params.albumId],
    albumId: params.albumId,
    allTracks: tracks,
    errors: errors.albums,
    loading: loading.loading,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchAlbum: (albumId) => dispatch(fetchAlbum(albumId)),
  createAlbum: (album) => dispatch(createAlbum(album)),
  clearErrors: (errors, key) => dispatch(clearAlbumErrors(errors, key)),
  clearAllErrors: () => dispatch(clearAllAlbumErrors()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AlbumUpdate);

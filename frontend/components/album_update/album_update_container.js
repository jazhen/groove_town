import { connect } from 'react-redux';
import {
  fetchAlbum,
  clearAlbumErrors,
  clearAllAlbumErrors,
  updateAlbum,
} from '../../actions/album_actions';
import { deleteAlbum } from '../../util/album_api_util';
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
    loading,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchAlbum: (albumId) => dispatch(fetchAlbum(albumId)),
  updateAlbum: (album, albumId) => dispatch(updateAlbum(album, albumId)),
  deleteAlbum: (albumId) => deleteAlbum(albumId),
  clearErrors: (errors, key) => dispatch(clearAlbumErrors(errors, key)),
  clearAllErrors: () => dispatch(clearAllAlbumErrors()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AlbumUpdate);

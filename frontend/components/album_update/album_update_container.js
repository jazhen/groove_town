import { connect } from 'react-redux';
import { clearAlbumErrors, fetchAlbum } from '../../actions/album_actions';
import AlbumUpdate from './album_update';

const mapStateToProps = (
  { entities: { users, tracks, albums }, errors, session: { id } },
  { match: { params } }
) => {
  return {
    user: users[id],
    oldAlbum: albums[params.albumId],
    albumId: params.albumId,
    allTracks: tracks,
    albumErrors: errors.albums,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchAlbum: (albumId) => dispatch(fetchAlbum(albumId)),
  clearAlbumErrors: (errors, key) => dispatch(clearAlbumErrors(errors, key)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AlbumUpdate);

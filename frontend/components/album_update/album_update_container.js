import { connect } from 'react-redux';
import { clearAlbumErrors, fetchAlbum } from '../../actions/album_actions';
import AlbumUpdate from './album_update';

const mapStateToProps = (
  { entities: { users, albums }, errors, session: { id } },
  { match: { params } }
) => {
  return {
    user: users[id],
    albums,
    albumId: params.albumId,
    albumErrors: errors.albums,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchAlbum: (albumId) => dispatch(fetchAlbum(albumId)),
  clearAlbumErrors: (errors, key) => dispatch(clearAlbumErrors(errors, key)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AlbumUpdate);

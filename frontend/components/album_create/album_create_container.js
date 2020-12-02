import { connect } from 'react-redux';
import { clearAlbumErrors, createAlbum } from '../../actions/album_actions';
import AlbumCreate from './album_create';

const mapStateToProps = ({ entities: { users }, errors, session: { id } }) => {
  return {
    user: users[id],
    albumErrors: errors.albums,
  };
};

const mapDispatchToProps = (dispatch) => ({
  createAlbum: (album) => dispatch(createAlbum(album)),
  clearAlbumErrors: () => dispatch(clearAlbumErrors),
});

export default connect(mapStateToProps, mapDispatchToProps)(AlbumCreate);

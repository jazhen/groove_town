import { connect } from 'react-redux';
import { clearAlbumErrors, createAlbum } from '../../actions/album_actions';
import AlbumCreate from './album_create';

const mapStateToProps = ({
  entities: { users },
  session: { id },
  ui: { errors, loading },
}) => {
  return {
    user: users[id],
    errors: errors.albums,
    loading: loading.loading,
  };
};

const mapDispatchToProps = (dispatch) => ({
  createAlbum: (album) => dispatch(createAlbum(album)),
  clearErrors: (errors, key) => dispatch(clearAlbumErrors(errors, key)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AlbumCreate);

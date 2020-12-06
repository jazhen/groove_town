import { connect } from 'react-redux';
import {
  clearAlbumErrors,
  clearAllAlbumErrors,
  createAlbum,
} from '../../actions/album_actions';
import AlbumCreate from './album_create';

const mapStateToProps = ({
  entities: { users },
  session: { id },
  ui: { errors },
}) => {
  return {
    user: users[id],
    errors: errors.albums,
  };
};

const mapDispatchToProps = (dispatch) => ({
  createAlbum: (album) => dispatch(createAlbum(album)),
  clearErrors: (errors, key) => dispatch(clearAlbumErrors(errors, key)),
  clearAllErrors: () => dispatch(clearAllAlbumErrors()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AlbumCreate);

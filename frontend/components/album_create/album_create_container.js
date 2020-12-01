import { connect } from 'react-redux';
import { clearAlbumErrors, createAlbum } from '../../actions/album_actions';
import AlbumCreate from './album_create';

const mapStateToProps = ({
  entities: { users, albums, tracks },
  errors,
  session: { id },
}) => {
  return {
    users,
    albums,
    tracks,
    userId: id,
    nameError: errors.albums.name,
    artError: errors.albums.art,
  };
};

const mapDispatchToProps = (dispatch) => ({
  createAlbum: (album) => dispatch(createAlbum(album)),
  clearAlbumErrors: () => dispatch(clearAlbumErrors),
});

export default connect(mapStateToProps, mapDispatchToProps)(AlbumCreate);

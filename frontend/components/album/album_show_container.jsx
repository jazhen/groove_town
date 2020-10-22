import { connect } from 'react-redux';
import AlbumShow from './album_show';

const mapStateToProps = (state, ownProps) => {
  return {
    userId: ownProps.match.params.userId,
    albumId: ownProps.match.params.albumId,
  };
};

const mapDispatchToProps = (dispatch) => {};

export default connect(mapStateToProps, null)(AlbumShow);

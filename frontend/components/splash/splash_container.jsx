import { connect } from 'react-redux';
import Splash from './splash';
import { fetchAlbums } from '../../actions/album_actions';

const mapStateToProps = ({ entities: { albums } }) => {
  return {
    albums,
    albumIds: Object.keys(albums),
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchAlbums: () => dispatch(fetchAlbums()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Splash);

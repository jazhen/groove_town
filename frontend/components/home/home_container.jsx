import { connect } from 'react-redux';
import Home from './home';
import { fetchAlbums } from '../../actions/album_actions';

const mapStateToProps = (state) => ({
  albums: state.entities.albums,
});

const mapDispatchToProps = (dispatch) => ({
  fetchAlbums: () => dispatch(fetchAlbums()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

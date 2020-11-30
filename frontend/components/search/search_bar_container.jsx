import { connect } from 'react-redux';
import { fetchAll } from '../../actions/user_actions';
import SearchBar from './search_bar';

const mapStateToProps = ({ entities: { users, albums, tracks } }) => {
  return {
    users,
    albums,
    tracks,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchAll: () => dispatch(fetchAll()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);

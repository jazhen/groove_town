import { connect } from 'react-redux';
import AlbumShow from './album_show';

const mapStateToProps = (state, ownProps) => {
  const tabs = [
    { title: 'music', content: 'music tab' },
    { title: 'merch', content: 'merch tab' },
    {
      title: 'community',
      content: 'community tab',
    },
  ];

  return {
    userId: ownProps.match.params.userId,
    albumId: ownProps.match.params.albumId,
    tabs,
  };
};

const mapDispatchToProps = (dispatch) => {};

export default connect(mapStateToProps, null)(AlbumShow);

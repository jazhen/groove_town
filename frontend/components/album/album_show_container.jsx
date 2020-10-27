import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import AlbumShow from './album_show';
import AlbumShowMusic from './album_show_music';

const mapStateToProps = (
  { entities: { users, albums } },
  ownProps
) => {
  const { userId, albumId } = ownProps.match.params;
  const user = users[userId];
  const tabs = [
    {
      title: 'music',
      content: (
        <AlbumShowMusic
          user={user}
          albums={albums}
          albumId={albumId}
        />
      ),
    },
    { title: 'merch', content: '' },
    {
      title: 'community',
      content: '',
    },
  ];

  return {
    user,
    albums,
    tabs,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchUser: (userId) => dispatch(fetchUser(userId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumShow);

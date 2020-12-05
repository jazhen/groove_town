import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import AlbumShow from './album_show';
import AlbumShowAudioPlayer from './album_show_audio_player';

const mapStateToProps = (
  { entities: { users, albums, tracks }, ui: { loading } },
  {
    match: {
      params: { userId, albumId },
    },
  }
) => {
  const user = users[userId];

  const tabs = [
    {
      title: 'music',
      content: (
        <AlbumShowAudioPlayer
          user={user}
          albums={albums}
          tracks={tracks}
          albumId={albumId}
        />
      ),
    },
    // { title: 'merch', content: '' },
    // {
    //   title: 'community',
    //   content: '',
    // },
  ];

  return {
    user,
    albums,
    userId,
    albumId,
    tabs,
    loading,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchUser: (userId) => dispatch(fetchUser(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AlbumShow);

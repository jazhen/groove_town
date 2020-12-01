import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import UserShow from './user_show';
import UserShowAlbums from './user_show_albums';

const mapStateToProps = (
  { entities: { users, albums } },
  { match: { params } }
) => {
  const user = users[params.userId];

  const tabs = [
    { title: 'collection', content: '' },
    { title: 'following', content: '' },
    {
      title: 'albums',
      content: <UserShowAlbums user={user} albums={albums} />,
    },
  ];

  return {
    user,
    tabs,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchUser: (userId) => dispatch(fetchUser(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);

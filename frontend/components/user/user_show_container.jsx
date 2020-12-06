import React from 'react';
import { connect } from 'react-redux';
import { fetchUser, updateUser } from '../../actions/user_actions';
import UserShow from './user_show';
import UserShowAlbums from './user_show_albums';

const mapStateToProps = (
  { entities: { users, albums }, session, ui: { errors, loading } },
  { match: { params } }
) => {
  const user = users[params.userId];

  const tabs = [
    {
      title: 'albums',
      content: (
        <UserShowAlbums
          user={user}
          albums={albums}
          currentUserId={session.id}
        />
      ),
    },
    // { title: 'collection', content: '' },
    // { title: 'following', content: '' },
  ];

  return {
    user,
    tabs,
    userId: params.userId,
    currentUserId: `${session.id}`,
    errors: errors.users,
    loading,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchUser: (userId) => dispatch(fetchUser(userId)),
  updateUser: (user, userId) => dispatch(updateUser(user, userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);

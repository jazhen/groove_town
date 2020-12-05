import React, { useEffect, useState } from 'react';
import Loading from '../loading/loading';

const TabHeaders = ({ selectedTab, setSelectedTab, tabs, numAlbums }) => {
  const active = selectedTab;
  const headers = tabs.map((tab, index) => {
    const { title } = tab;
    const selected = index === active ? 'active' : 'inactive';

    return (
      <li
        className={`user-show__tabs-header-list-item--${selected}`}
        // eslint-disable-next-line react/no-array-index-key
        key={index}
      >
        <button
          type="button"
          className={`user-show__tabs-header-button user-show__tabs-header-button--${selected}`}
          onClick={() => setSelectedTab(index)}
        >
          <span className="user-show__tab-title">{title}</span>
          {title === 'albums' ? (
            <span className="user-show__tab-amount">{`${numAlbums}`}</span>
          ) : (
            <span className="user-show__tab-amount">0</span>
          )}
        </button>
      </li>
    );
  });

  return <ul className="user-show__tabs-header-list">{headers}</ul>;
};

const UserShow = ({
  user,
  userId,
  // currentUserId,
  fetchUser,
  tabs,
  loading,
}) => {
  const [selectedTab, setSelectedTab] = useState(0);

  useEffect(() => {
    fetchUser(userId);
  }, [fetchUser, userId]);

  const handleProfileClick = () => {};

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="user-show">
      <div className="user-show__main-container">
        <div className="user-show__user-profile">
          <div className="user-show__banner">
            <div className="user-show__profile-picture-container">
              <div className="user-show__profile-picture-background">
                {/* {user.id === currentUserId ? (
                    <div className="user-albums__profile-picture-update-container">
                      <div
                        // to={`/albums/${album.id}/edit`}
                        className="user-albums__profile-picture-update"
                      >
                        edit
                      </div>
                    </div>
                  ) : null} */}
                <img
                  src={user.avatarUrl}
                  className="user-show__profile-picture"
                  alt="avatar"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="user-show__profile-container">
          <div className="user-show__profile-placeholder" />
          <div className="user-show__profile">
            <p className="user-show__profile-name">
              {user.band ? user.band : user.username}
            </p>
            <button type="button" onClick={handleProfileClick}>
              Edit Profile
            </button>
          </div>
        </div>
        <div className="user-show__collection-container">
          <TabHeaders
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
            tabs={tabs}
            numAlbums={user.albumIds.length}
          />
          <div className="user-show__tab-content">
            <div className="user-show__tab-content-container">
              {tabs[selectedTab].content}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserShow;

import React, { useEffect, useState } from 'react';
import EditProfile from './user_show_edit_profile';

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
  currentUserId,
  fetchUser,
  tabs,
  errors,
  updateUser,
  clearAllErrors,
  loading,
}) => {
  const [profile, setProfile] = useState({
    location: '',
    avatarFile: null,
    avatarUrl: '',
  });

  const [selectedTab, setSelectedTab] = useState(0);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    clearAllErrors();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetchUser(userId);
  }, [fetchUser, userId]);

  const handleAvatarUpload = (e) => {
    const file = e.currentTarget.files[0];
    const url = URL.createObjectURL(file);

    setProfile({ ...profile, avatarFile: file, avatarUrl: url });
  };

  const handleOnLocationChange = (e) => {
    setProfile({ ...profile, location: e.currentTarget.value });
  };

  const handleEdit = () => {
    setProfile({ location: user.location });
    setEditing(true);
  };

  const handleCancel = () => {
    setProfile({ location: user.location });
    clearAllErrors();
    setEditing(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('user[id]', userId);
    formData.append('user[location]', profile.location);
    if (profile.avatarFile) {
      formData.append('user[avatar]', profile.avatarFile);
    }

    updateUser(formData, userId).then(() => {
      setProfile({ location: profile.location });
      setEditing(false);
    });
  };

  if (loading || !user) {
    return null;
  }

  return (
    <div className="user-show">
      <div className="user-show__main-container">
        <div className="user-show__user-profile">
          <div className="user-show__banner">
            <div className="user-show__profile-picture-container">
              <div className="user-show__profile-picture-background">
                <img
                  src={profile.avatarUrl || user.avatarUrl}
                  className={
                    editing
                      ? 'user-show__profile-picture user-show__profile-picture--edit'
                      : 'user-show__profile-picture'
                  }
                  alt="avatar"
                />
                {editing ? (
                  <>
                    <input
                      type="file"
                      id="user-show__profile-picture-input"
                      className="user-show__profile-picture-input"
                      accept="image/jpeg, image/png"
                      onChange={handleAvatarUpload}
                    />
                    {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                    <label
                      htmlFor="user-show__profile-picture-input"
                      className="user-show__profile-picture-label"
                    />
                    <i className="fas fa-3x fa-camera user-show__profile-picture-edit-icon" />
                    <p className="user-show__profile-pic-edit-errors">
                      {errors.avatar && errors.avatar.length
                        ? errors.avatar[0]
                        : null}
                    </p>
                  </>
                ) : null}
              </div>
            </div>
          </div>
        </div>
        <div className="user-show__profile-container">
          <div className="user-show__profile-placeholder" />
          <div className="user-show__profile">
            <div className="user-show__profile-edit-container">
              <p className="user-show__profile-name">
                {user.band || user.username}
              </p>
              {userId === currentUserId && !editing ? (
                <button
                  type="button"
                  onClick={handleEdit}
                  className="user-show__profile-edit-button"
                >
                  <i className="far fa-edit" />
                  &nbsp;Edit Profile
                </button>
              ) : null}
            </div>
            {user.location && !editing ? (
              <p className="user-show__profile-location">{user.location}</p>
            ) : null}
            {userId === currentUserId && editing ? (
              <EditProfile
                originalLocation={user.location}
                profile={profile}
                handleOnLocationChange={handleOnLocationChange}
                handleSubmit={handleSubmit}
                handleCancel={handleCancel}
              />
            ) : null}
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

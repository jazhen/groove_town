import React from 'react';

const EditProfile = ({ handleSubmit, handleCancel }) => {
  return (
    <>
      <label className="user-show__profile-edit-location-label">
        location
        <input type="text" className="user-show__profile-edit-location-input" />
      </label>

      <div className="user-show__profile-edit-button-container">
        <button
          type="button"
          className="user-show__profile-edit-save-button"
          onClick={handleSubmit}
        >
          Save Changes
        </button>
        <button
          type="button"
          className="user-show__profile-edit-cancel-button"
          onClick={handleCancel}
        >
          Cancel
        </button>
      </div>
    </>
  );
};

export default EditProfile;

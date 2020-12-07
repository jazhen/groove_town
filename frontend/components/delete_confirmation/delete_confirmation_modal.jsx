import React from 'react';

const DeleteConfirmationModal = ({
  setShowDeleteConfirmation,
  handleAlbumDeleteConfirm,
}) => {
  return (
    <div className="delete-confirmation">
      <div className="delete-confirmation__content">
        <div className="delete-confirmation__warning">
          Are you sure you want to delete this album?
        </div>
        <div className="delete-confirmation__buttons-container">
          <button
            type="button"
            className="delete-confirmation__confirm-button delete-confirmation__button"
            onClick={handleAlbumDeleteConfirm}
          >
            Delete
          </button>
          <button
            type="button"
            className="delete-confirmation__cancel-button delete-confirmation__button"
            onClick={() => setShowDeleteConfirmation(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;

import React from 'react';

const DeleteConfirmationModal = ({
  setShowDeleteConfirmation,
  handleAlbumDeleteConfirm,
}) => {
  return (
    <div className="delete-confirmation">
      <div className="delete-confirmation__content">
        <div className="delete-confirmation__top">
          <div className="delete-confirmation__header">Delete album?</div>
          <button
            type="button"
            className="delete-confirmation__close"
            onClick={() => setShowDeleteConfirmation(false)}
          >
            X
          </button>
        </div>
        <div className="delete-confirmation__warning">
          Are you sure you want to permanently delete this album?
        </div>
        <div className="delete-confirmation__buttons-container">
          <button
            type="button"
            className="delete-confirmation__confirm-button delete-confirmation__button"
            onClick={handleAlbumDeleteConfirm}
          >
            Yes, delete it
          </button>
          <button
            type="button"
            className="delete-confirmation__cancel-button delete-confirmation__button"
            onClick={() => setShowDeleteConfirmation(false)}
          >
            No, keep it
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;

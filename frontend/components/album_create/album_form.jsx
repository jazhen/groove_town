import React, { useState } from 'react';

const AlbumForm = ({ userId, createAlbum, nameError, artError }) => {
  const today = new Date().toISOString().slice(0, 10);
  const [albumName, setAlbumName] = useState('');
  const [albumReleaseDate, setAlbumReleaseDate] = useState(today);
  const [albumArtFile, setAlbumArtFile] = useState(null);
  const [albumArtUrl, setAlbumArtUrl] = useState(null);

  const handleAlbumNameChange = (e) => {
    setAlbumName(e.currentTarget.value);
  };

  const handleAlbumReleaseDateChange = (e) => {
    setAlbumReleaseDate(e.currentTarget.value);
  };

  const handleArtUpload = (e) => {
    const file = e.currentTarget.files[0];
    const url = URL.createObjectURL(file);

    setAlbumArtFile(file);
    setAlbumArtUrl(url);
  };

  const handleArtRemove = () => {
    setAlbumArtUrl(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('album[name]', albumName);
    formData.append('album[user_id]', userId);
    formData.append('album[release_date]', albumReleaseDate);
    if (albumArtFile) {
      formData.append('album[art]', albumArtFile);
    }

    createAlbum(formData);
  };

  return (
    <form className="album-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="album-form__name"
        value={albumName}
        onChange={handleAlbumNameChange}
        placeholder="album name"
      />
      <div>{nameError}</div>
      <label className="album-form__date-label">
        release date:
        <input
          type="date"
          min="1900-01-01"
          max={today}
          className="album-form__date-input"
          value={albumReleaseDate}
          onChange={handleAlbumReleaseDateChange}
          placeholder="optional"
        />
        <span className="album-form__date-description">default is today</span>
      </label>

      {albumArtUrl ? (
        <div
          className="album-form__file-input-container
            album-form__file-input-container--file"
        >
          <img
            src={albumArtUrl}
            alt="album art"
            className="album-form__file-input-art"
          />
          <button
            type="button"
            className="album-form__file-input-remove"
            onClick={handleArtRemove}
          >
            <i className="fas fa-times" />
          </button>
        </div>
      ) : (
        <>
          <div
            className="album-form__file-input-container
            album-form__file-input-container--empty"
          >
            <input
              type="file"
              id="album-form__file-input"
              className="album-form__file-input"
              accept="image/jpeg"
              onChange={handleArtUpload}
            />
            <label
              htmlFor="album-form__file-input"
              className="album-form__file-label"
            >
              Upload Album Art
            </label>
            <div className="album-form__file-input-description">
              <div>1000 x 1000 pixels minimum</div>
              <div>.jpg or .png, 5MB max</div>
            </div>
          </div>
          <div>{artError}</div>
        </>
      )}
      <input type="submit" value="Submit" />
    </form>
  );
};

export default AlbumForm;

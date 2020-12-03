import React, { useEffect, useState } from 'react';

const AlbumUpdateAlbumForm = ({
  album,
  setAlbum,
  oldReleaseDate,
  today,
  errors,
  clearErrors,
}) => {
  const [formattedReleaseDate, setFormattedReleaseDate] = useState(today);

  useEffect(() => {
    setFormattedReleaseDate(album.releaseDate.slice(0, 10));
  }, [album.releaseDate]);

  const handleNameChange = (e) => {
    if (errors.name && errors.name.length) {
      clearErrors(errors, 'name');
    }
    setAlbum({ ...album, name: e.currentTarget.value });
  };

  const handleAlbumReleaseDateChange = (e) => {
    setAlbum({ ...album, releaseDate: e.currentTarget.value });
  };

  const handleArtUpload = (e) => {
    const file = e.currentTarget.files[0];
    const url = URL.createObjectURL(file);

    if (errors.art && errors.art.length) {
      clearErrors(errors, 'art');
    }

    setAlbum({ ...album, artFile: file, artUrl: url });
  };

  const handleArtRemove = () => {
    setAlbum({ ...album, artFile: null, artUrl: null });
  };

  return (
    <div className="album-update-album-form">
      <input
        type="text"
        className={`album-update-album-form__name${
          errors.name && errors.name.length
            ? ' album-update-album-form__input-error'
            : ''
        }`}
        value={album.name}
        onChange={handleNameChange}
        placeholder="album name"
      />
      <div className="album-update-album-form__error">
        {errors.name && errors.name.length ? errors.name[0] : null}
      </div>
      <label className="album-update-album-form__date-label">
        release date:
        <input
          type="date"
          min="1900-01-01"
          max={today}
          className="album-update-album-form__date-input"
          value={formattedReleaseDate || ''}
          onChange={handleAlbumReleaseDateChange}
        />
        <span className="album-update-album-form__date-description">
          last published date was {oldReleaseDate}
        </span>
      </label>

      {album.artUrl ? (
        <div
          className="album-update-album-form__file-input-container
            album-update-album-form__file-input-container--file"
        >
          <img
            src={album.artUrl}
            alt="album art"
            className="album-update-album-form__file-input-art"
          />
          <button
            type="button"
            className="album-update-album-form__file-input-remove"
            onClick={handleArtRemove}
          >
            <i className="fas fa-times" />
          </button>
        </div>
      ) : (
        <>
          <div
            className="album-update-album-form__file-input-container
            album-update-album-form__file-input-container--empty"
          >
            <input
              type="file"
              id="album-update-album-form__file-input"
              className="album-update-album-form__file-input"
              accept="image/jpeg, image/png"
              onChange={handleArtUpload}
            />
            <label
              htmlFor="album-update-album-form__file-input"
              className="album-update-album-form__file-label"
            >
              Upload Album Art
            </label>
            <div className="album-update-album-form__file-input-description">
              <div>1000 x 1000 pixels minimum</div>
              <div>.jpg or .png, 5MB max</div>
            </div>
          </div>
        </>
      )}
      <div className="album-update-album-form__error">
        {errors.art && errors.art.length ? errors.art[0] : null}
      </div>
    </div>
  );
};

export default AlbumUpdateAlbumForm;

import React from 'react';

const AlbumCreateAlbumForm = ({
  album,
  setAlbum,
  today,
  errors,
  clearErrors,
}) => {
  const handleNameChange = (e) => {
    if (errors.name && errors.name.length) {
      clearErrors(errors, ['name']);
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
      clearErrors(errors, ['art']);
    }

    setAlbum({ ...album, artFile: file, artUrl: url });
  };

  const handleArtRemove = () => {
    setAlbum({ ...album, artFile: null, artUrl: null });
  };

  return (
    <div className="album-form">
      <input
        type="text"
        className={`album-form__name${
          errors.name && errors.name.length ? ' album-form__input-error' : ''
        }`}
        value={album.name}
        onChange={handleNameChange}
        placeholder="album name"
      />
      <div className="album-form__error">
        {errors.name && errors.name.length ? errors.name[0] : null}
      </div>
      <label className="album-form__date-label">
        release date:
        <input
          type="date"
          min="1900-01-01"
          max={today}
          className="album-form__date-input"
          value={album.releaseDate}
          onChange={handleAlbumReleaseDateChange}
          placeholder="optional"
        />
        <span className="album-form__date-description">default is today</span>
      </label>

      {album.artUrl ? (
        <div
          className="album-form__file-input-container
            album-form__file-input-container--file"
        >
          <img
            src={album.artUrl}
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
              accept="image/jpeg, image/png"
              onChange={handleArtUpload}
            />
            <label
              htmlFor="album-form__file-input"
              className="album-form__file-label"
            >
              Upload Album Art
            </label>
            <div className="album-form__file-input-description">
              <p>no dimension limit (larger is better)</p>
              <p>.jpg or .png, 5MB max</p>
            </div>
          </div>
        </>
      )}
      <div className="album-form__error">
        {errors.art && errors.art.length ? errors.art[0] : null}
      </div>
    </div>
  );
};

export default AlbumCreateAlbumForm;

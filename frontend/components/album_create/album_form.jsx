import React from 'react';

const AlbumForm = ({ album, setAlbum, today }) => {
  const handleAlbumNameChange = (e) => {
    setAlbum({ ...album, name: e.currentTarget.value });
  };

  const handleAlbumReleaseDateChange = (e) => {
    setAlbum({ ...album, releaseDate: e.currentTarget.value });
  };

  const handleArtUpload = (e) => {
    const file = e.currentTarget.files[0];
    const url = URL.createObjectURL(file);

    setAlbum({ ...album, artFile: file, artUrl: url });
  };

  const handleArtRemove = () => {
    setAlbum({ ...album, artFile: null, artUrl: null });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   const formData = new FormData();
  //   formData.append('album[name]', albumName);
  //   formData.append('album[user_id]', userId);
  //   formData.append('album[release_date]', albumReleaseDate);
  //   if (albumArtFile) {
  //     formData.append('album[art]', albumArtFile);
  //   }

  //   createAlbum(formData);
  // };

  return (
    <form
      className="album-form"
      // onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="album-form__name"
        value={album.name}
        onChange={handleAlbumNameChange}
        placeholder="album name"
      />
      {/* <div>{nameError}</div> */}
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
          {/* <div>{artError}</div> */}
        </>
      )}
      <input type="submit" value="Submit" />
    </form>
  );
};

export default AlbumForm;

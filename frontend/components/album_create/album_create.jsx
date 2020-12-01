import React, { useState } from 'react';

const AlbumCreate = () => {
  const [albumName, setAlbumName] = useState('');
  const [albumReleaseDate, setAlbumReleaseDate] = useState(
    new Date().toISOString().slice(0, 10)
  );
  const [albumArt, setAlbumArt] = useState(null);

  const handleAlbumNameChange = (e) => {
    setAlbumName(e.currentTarget.value);
  };

  const handleAlbumReleaseDateChange = (e) => {
    setAlbumReleaseDate(e.currentTarget.value);
  };

  const handleArtUpload = (e) => {
    const file = e.currentTarget.files[0];
    const url = URL.createObjectURL(file);
    setAlbumArt(url);
  };

  const handleArtRemove = () => {
    setAlbumArt(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`album: ${albumName} | release: ${albumReleaseDate}`);
  };

  return (
    <form className="album-create" onSubmit={handleSubmit}>
      <input
        type="text"
        value={albumName}
        onChange={handleAlbumNameChange}
        placeholder="album name"
      />
      <label>
        release date:
        <input
          type="date"
          value={albumReleaseDate}
          onChange={handleAlbumReleaseDateChange}
          placeholder="optional"
        />
      </label>

      {albumArt ? (
        <div
          className="album-create__file-input-container
            album-create__file-input-container--file"
        >
          <img
            src={albumArt}
            alt="album art"
            className="album-create__file-input-art"
          />
          <button
            type="button"
            className="album-create__file-input-remove"
            onClick={handleArtRemove}
          >
            <i className="fas fa-times" />
          </button>
        </div>
      ) : (
        <div
          className="album-create__file-input-container
            album-create__file-input-container--empty"
        >
          <input
            type="file"
            id="album-create__file-input"
            className="album-create__file-input"
            accept="image/jpeg"
            onChange={handleArtUpload}
          />
          <label
            htmlFor="album-create__file-input"
            className="album-create__file-label"
          >
            Upload Album Art
          </label>
          <div>1400 x 1400 pixels minimum (bigger is better)</div>
          <div>.jpg, .gif or .png, 10MB max</div>
        </div>
      )}
      <input type="submit" value="Submit" />
    </form>
  );
};

export default AlbumCreate;

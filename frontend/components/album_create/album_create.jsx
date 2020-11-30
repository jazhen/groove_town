import React, { useState } from 'react';

const AlbumCreate = () => {
  const [albumName, setAlbumName] = useState('');
  const [albumReleaseDate, setAlbumReleaseDate] = useState(
    new Date().toISOString().slice(0, 10)
  );

  const handleAlbumNameChange = (e) => {
    setAlbumName(e.currentTarget.value);
  };

  const handleAlbumReleaseDateChange = (e) => {
    setAlbumReleaseDate(e.currentTarget.value);
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
      <input type="file" accept="audio/mp3" />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default AlbumCreate;

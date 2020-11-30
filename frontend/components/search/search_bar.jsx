import React, { useEffect, useState } from 'react';

const SearchBar = ({ albums }) => {
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    // fetchAll();
  });

  const updateSeachResults = (value) => {
    const results = Object.values(albums).filter((album) =>
      album.name.toLowerCase().includes(value.toLowerCase())
    );

    setSearchResults(results);
  };

  const handleChange = (e) => {
    updateSeachResults(e.currentTarget.value);
  };

  return (
    <div className="nav-bar__search-bar">
      <input
        className="nav-bar__search-bar-input"
        placeholder="Search and discover music"
        onChange={handleChange}
      />
      <button type="button" className="nav-bar__search-bar-icon">
        <i className="fas fa-search" />
      </button>
      <ul className="nav-bar__search-bar-results">
        {searchResults.map((result) => {
          return <li key={result.id}>{result.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default SearchBar;

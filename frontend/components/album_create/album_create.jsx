import React, { useState } from 'react';
import AlbumForm from './album_form';

const TABS = {
  albumForm: <AlbumForm />,
  // product: <Product />,
  // contact: <Contact />,
};

const AlbumCreate = () => {
  const [selectedTab, setSelectedTab] = useState('albumForm');

  return (
    <div className="album-create">
      <div className="album-create__tabs">
        <button type="button" onClick={() => setSelectedTab('albumForm')}>
          albumForm
        </button>
        <button type="button" onClick={() => setSelectedTab('albumForm')}>
          albumForm
        </button>
        <button type="button" onClick={() => setSelectedTab('albumForm')}>
          albumForm
        </button>
      </div>
      <div className="album-create__active-tab">{TABS[selectedTab]}</div>
    </div>
  );
};

export default AlbumCreate;

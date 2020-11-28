import React, { useEffect, useState } from 'react';

const TabHeaders = ({ selectedTab, setSelectedTab, tabs }) => {
  const headers = tabs.map((tab, index) => {
    const { title } = tab;
    const selected = index === selectedTab ? 'active' : 'inactive';

    return (
      <li
        className={`album-show__tabs-header-list-item album-show__tabs-header-list-item--${selected}`}
        // eslint-disable-next-line react/no-array-index-key
        key={index}
      >
        <button
          className={`album-show__tabs-header-button album-show__tabs-header-button--${selected}`}
          type="button"
          onClick={() => setSelectedTab(index)}
        >
          <span className="album-show__tab-title">{title}</span>
        </button>
      </li>
    );
  });

  return <ul className="album-show__tabs-header-list">{headers}</ul>;
};

const AlbumShow = ({ albums, tabs, fetchUser, match: { params } }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  useEffect(() => {
    fetchUser(params.userId);
  }, [fetchUser, params.userId]);

  if (!Object.keys(albums).length) {
    return null;
  }

  const tab = tabs[selectedTab];
  const album = albums[params.albumId];

  return (
    <>
      <div
        id="album-show"
        className="album-show"
        style={{
          backgroundImage: `url(https://coderwall-assets-0.s3.amazonaws.com/uploads/picture/file/1410/noise-bg.png)`,
        }}
      >
        <div className="album-show__main-container">
          <div className="album-show__banner-container">
            <div
              className="album-show__banner"
              style={{
                backgroundImage: `url(${album.art_url})`,
              }}
            />
          </div>
          <TabHeaders
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
            tabs={tabs}
          />
          <div className="album-show__tab-content">
            <div className="album-show__tab-content-container">
              {tab.content}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AlbumShow;

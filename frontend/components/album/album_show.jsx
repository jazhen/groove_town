import React from 'react';

const TabHeaders = ({ selectedTab, onTabChosen, tabs }) => {
  const active = selectedTab;
  const headers = tabs.map((tab, index) => {
    const { title } = tab;
    const selected = index === active ? 'active' : 'inactive';

    return (
      <li
        className={`album-show__tabs-header-list-item album-show__tabs-header-list-item--${selected}`}
        // eslint-disable-next-line react/no-array-index-key
        key={index}
      >
        <button
          className={`album-show__tabs-header-button album-show__tabs-header-button--${selected}`}
          type="button"
          onClick={() => onTabChosen(index)}
        >
          <span className="album-show__tab-title">{title}</span>
        </button>
      </li>
    );
  });

  return <ul className="album-show__tabs-header-list">{headers}</ul>;
};

class AlbumShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 0,
      albumId: 0,
    };
    this.selectTab = this.selectTab.bind(this);
  }

  componentDidMount() {
    const {
      fetchUser,
      match: { params },
    } = this.props;
    fetchUser(params.userId);
    this.setState({ albumId: params.albumId });
  }

  selectTab(num) {
    this.setState({ selectedTab: num });
  }

  render() {
    const { tabs, user, albums } = this.props;
    const { selectedTab, albumId } = this.state;
    const tab = tabs[selectedTab];

    if (!user) {
      return null;
    }

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
                  backgroundImage: `url(${albums[albumId].photoUrl})`,
                }}
              />
            </div>
            <TabHeaders
              selectedTab={selectedTab}
              onTabChosen={this.selectTab}
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
  }
}

export default AlbumShow;

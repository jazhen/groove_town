import React from 'react';

const TabHeaders = ({ selectedTab, onTabChosen, tabs, numAlbums }) => {
  const active = selectedTab;
  const headers = tabs.map((tab, index) => {
    const { title } = tab;
    const selected = index === active ? 'user-show__tabs--active' : '';

    return (
      <li
        className={`user-show__tabs-header-list-item ${selected}`}
        key={index}>
        <button
          className="user-show__tabs-header-button"
          onClick={() => onTabChosen(index)}>
          <span className="user-show__tab-title">{title}</span>
          {title === 'albums' ? (
            <span className="user-show__tab-amount">{`${numAlbums}`}</span>
          ) : (
            <span className="user-show__tab-amount">0</span>
          )}
        </button>
      </li>
    );
  });

  return <ul className="user-show__tabs-header-list">{headers}</ul>;
};

class UserShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 0,
    };
    this.selectTab = this.selectTab.bind(this);
  }

  componentDidMount() {
    const { fetchUser, match } = this.props;
    fetchUser(match.params.userId);
  }

  selectTab(num) {
    this.setState({ selectedTab: num });
  }

  render() {
    const { user, albums, tabs } = this.props;
    const { selectedTab } = this.state;

    const tab = tabs[selectedTab];

    return (
      <div className="user-show">
        <div className="user-show__main-container">
          <div className="user-show__user-profile">
            <div className="user-show__banner">
              <div className="user-show__profile-picture-container">
                <div className="user-show__profile-picture" />
              </div>
            </div>
          </div>
          <div className="user-show__profile-container">
            <div className="user-show__profile-placeholder" />
            <div className="user-show__profile">
              <span className="user-show__profile-span">
                {user.band ? user.band : user.username}
              </span>
            </div>
          </div>
          <div className="user-show__collection-container">
            <TabHeaders
              selectedTab={selectedTab}
              onTabChosen={this.selectTab}
              tabs={tabs}
              numAlbums={user.albumIds.length}
            />
            <div className="user-show__tab-content">
              <div className="user-show__tab-content-container">
                {tab.content}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserShow;

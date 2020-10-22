import React from 'react';

const TabHeaders = ({ selectedPane, onTabChosen, panes, numAlbums }) => {
  const active = selectedPane;
  const headers = panes.map((pane, index) => {
    const { title } = pane;
    const selected = index === active ? 'user-show__tabs--active' : '';

    let tabAmount;
    if (title === 'albums' && numAlbums > 1) {
      tabAmount = (
        <span className="user-show__tab-amount">{` ${numAlbums}`}</span>
      );
    }

    return (
      <li
        className={`user-show__tabs-header-list-item ${selected}`}
        key={index}>
        <button
          className="user-show__tabs-header-button"
          onClick={() => onTabChosen(index)}>
          <span className="user-show__tab-title">{title}</span>
          {tabAmount}
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
      selectedPane: 0,
    };
    this.selectTab = this.selectTab.bind(this);
  }

  componentDidMount() {
    const { fetchUser, match } = this.props;
    fetchUser(match.params.userId);
  }

  selectTab(num) {
    this.setState({ selectedPane: num });
  }

  render() {
    const { user, albums, panes } = this.props;
    const { selectedPane } = this.state;

    const pane = panes[selectedPane];

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
              selectedPane={selectedPane}
              onTabChosen={this.selectTab}
              panes={panes}
              numAlbums={user.albumIds.length}
            />
            <div className="user-show__tab-content">
              <div className="user-show__tab-content-container">
                {pane.content}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserShow;

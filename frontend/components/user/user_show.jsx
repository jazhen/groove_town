import React from 'react';

const TabHeaders = ({ selectedPane, onTabChosen, panes }) => {
  const active = selectedPane;
  const headers = panes.map((pane, index) => {
    const { title } = pane;
    const selected = index === active ? 'user-show__tabs--active' : '';

    return (
      <li
        className={`user-show__tabs-header-list-item ${selected}`}
        key={index}>
        <button
          className="user-show__tabs-header-button"
          onClick={() => onTabChosen(index)}>
          {title}
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
    // debugger;
  }

  selectTab(num) {
    this.setState({ selectedPane: num });
  }

  render() {
    const { users, albums, panes } = this.props;
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
            <div className="user-show__profile-container" />
          </div>
          <div className="user-show__collection-container">
            <TabHeaders
              selectedPane={selectedPane}
              onTabChosen={this.selectTab}
              panes={panes}
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

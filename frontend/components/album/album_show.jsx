import React from 'react';

const TabHeaders = ({ selectedTab, onTabChosen, tabs }) => {
  const active = selectedTab;
  const headers = tabs.map((tab, index) => {
    const { title } = tab;
    const selected = index === active ? 'album-show__tabs--active' : '';

    return (
      <li
        className={`album-show__tabs-header-list-item ${selected}`}
        key={index}>
        <button
          className="album-show__tabs-header-button"
          onClick={() => onTabChosen(index)}>
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
    };
    this.selectTab = this.selectTab.bind(this);
  }

  selectTab(num) {
    this.setState({ selectedTab: num });
  }

  render() {
    const { tabs } = this.props;
    const { selectedTab } = this.state;
    const tab = tabs[selectedTab];

    return (
      <div className="album-show">
        <div className="album-show__main-container">
          <div className="album-show__banner" />
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
    );
  }
}

export default AlbumShow;

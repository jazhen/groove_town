import React from 'react';

const TabHeaders = ({ selectedTab, onTabChosen, tabs }) => {
  const active = selectedTab;
  const headers = tabs.map((tab, index) => {
    const { title } = tab;
    const selected = index === active ? 'active' : 'inactive';

    return (
      <li
        className={`album-show__tabs-header-list-item album-show__tabs-header-list-item--${selected}`}
        key={index}>
        <button
          className={`album-show__tabs-header-button album-show__tabs-header-button--${selected}`}
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
      albumId: 0,
    };
    this.selectTab = this.selectTab.bind(this);
  }

  componentDidMount() {
    const { fetchUser, match } = this.props;
    fetchUser(match.params.userId);
    setTimeout(function () {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const image = document.getElementById('album-player__art');
      // debugger;
      image.addEventListener('load', (e) => {
        ctx.drawImage(image, 0, 0, 1100, 1000);
      });
      // const cw = (canvas.width = 200);
      // const ch = (canvas.height = 200);

      // for (let x = 0; x < cw; x++) {
      //   for (let y = 0; y < ch; y++) {
      //     ctx.fillStyle = `hsl(0, 0%, ${100 - Math.random() * 15}%)`;
      //     ctx.fillRect(x, y, 1, 1);
      //   }
      // }

      const a = document.getElementById('album-show');
      if (a) {
        // debugger;
        a.style.background = `url(${canvas.toDataURL()})`;
      }
    }, 100);

    this.setState({ albumId: match.params.albumId });
  }

  componentDidUpdate() {
    setTimeout(function () {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const cw = (canvas.width = 200);
      const ch = (canvas.height = 200);

      for (let x = 0; x < cw; x++) {
        for (let y = 0; y < ch; y++) {
          ctx.fillStyle = `hsl(0, 0%, ${100 - Math.random() * 15}%)`;
          ctx.fillRect(x, y, 1, 1);
        }
      }

      const a = document.getElementById('album-show');
      if (a) {
        // debugger;
        a.style.background = `url(${canvas.toDataURL()})`;
      }
    }, 50);
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
        <div id="album-show" className="album-show">
          <div className="album-show__main-container">
            <div className="album-show__banner-container">
              <div
                className="album-show__banner"
                style={{ backgroundImage: `url(${albums[albumId].photoUrl})` }}
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

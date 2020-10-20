import React from 'react';

class UserShow extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    const { fetchUser, match } = this.props;
    fetchUser(match.params.userId);
  }

  render() {
    // debugger;
    // const info = JSON.stringify(this.props.albums);
    return (
      <div className="user-show">
        <div className="user-show__main-container">
          <div className="user-show__collection-container">
            <ul className="user-show__collection-tab-list">
              <li className="user-show__collection-tab-list-item user-show__collection-collection">
                collection
              </li>
              <li className="user-show__collection-tab-list-item user-show__collection-following">
                following
              </li>
              <li className="user-show__collection-tab-list-item user-show__collection-albums">
                albums
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default UserShow;

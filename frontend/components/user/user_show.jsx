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
    return <div>WORKS</div>;
  }
}

export default UserShow;

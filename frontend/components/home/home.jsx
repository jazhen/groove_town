import React from 'react';

class Home extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // debugger;
    this.props.fetchAlbums();
  }

  render() {
    // debugger;
    return <h1>Working</h1>;
  }
}

export default Home;

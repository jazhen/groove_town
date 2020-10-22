import React from 'react';

class AlbumShow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>userId: {this.props.userId}</h1>
        <h1>albumId: {this.props.albumId}</h1>
      </div>
    );
  }
}

export default AlbumShow;

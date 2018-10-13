import React, { Component } from 'react';

class GifCard extends Component {
  render() {
    const { id, title, rating, username, src } = this.props;
    return (
      <div>
        <img src={src} alt="gif" class="img-thumbnail" />
      </div>
    );
  }
}

export default GifCard;

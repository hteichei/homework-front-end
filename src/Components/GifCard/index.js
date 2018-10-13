import React, { Component } from 'react';
import './style.css';

class GifCard extends Component {
  render() {
    const { id, title, rating, username, src } = this.props;
    return (
      <div className="card">
        <img src={src} alt="gif" className="img-thumnail" />
      </div>
    );
  }
}

export default GifCard;

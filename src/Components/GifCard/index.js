import React, { Component } from 'react';
import './style.css';
import LazyLoad from 'react-lazy-load';

class GifCard extends Component {
  render() {
    const { id, title, rating, username, src } = this.props;
    return (
      <div className="card">
        <LazyLoad debounce={false} height={250} width={250} offset={0}>
          <img src={src} alt="gif" className="img-thumnail" />
        </LazyLoad>
      </div>
    );
  }
}

export default GifCard;

import React, { Component } from 'react';
import GifCard from '../GifCard';
import './style.css';

class GifList extends Component {
  render() {
    const grid = this.props.gifList.map(gif => {
      return (
        <GifCard
          key={gif.id}
          id={gif.id}
          title={gif.title}
          src={gif.images.fixed_height.url}
          username={gif.username}
        />
      );
    });
    return <div className="container">{grid}</div>;
  }
}

export default GifList;

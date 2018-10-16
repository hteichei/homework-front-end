import React, { Component } from 'react';
import GifCard from '../GifCard';
import './style.css';

class GifList extends Component {
  state = {
    loadedGifs: []
  };

  componentWillReceiveProps(nextProps) {
    if (this.props.isSearch !== nextProps.isSearch) {
      this.setState({
        loadedGifs: []
      });
    }
  }

  sortLoading = item => {
    let updatedGifs = this.state.loadedGifs;
    updatedGifs.push({ imgPath: item.images.fixed_height.url, item });
    this.setState({ loadedItems: updatedGifs });
  };

  render() {
    return (
      <div className="container">
        {this.state.loadedGifs.map((item, i) => (
          <GifCard src={item.imgPath} item={item.item} key={i} />
        ))}
        <div className="hidden">
          {this.props.gifList.map((gif, i) => (
            <img
              key={gif.id}
              src={gif.images.fixed_height.url}
              onLoad={() => this.sortLoading(gif)}
              alt="GIF"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default GifList;

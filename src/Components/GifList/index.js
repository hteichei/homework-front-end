import React, { Component } from 'react';
import GifCard from '../GifCard';
import './style.css';
import Loader from 'react-loader-spinner';

class GifList extends Component {
  state = {
    loadedItems: [],
    loading: true
  };

  componentWillReceiveProps(nextProps) {
    if (this.props.gifList !== nextProps.gifList) {
      this.setState({
        loadedItems: [],
        loading: true
      });
    }
  }

  sortLoading(item) {
    this.setState({
      loadedItems: this.state.loadedItems.concat({
        imgPath: item.images.fixed_height.url,
        item
      }),
      loading: false
    });
  }

  render() {
    return (
      <div className="container">
        {this.state.loadedItems.map((item, i) => (
          <GifCard
            className="gifCard"
            src={item.imgPath}
            item={item.item}
            key={i}
          />
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
        {this.state.loading && !this.props.error && <Loader />}
      </div>
    );
  }
}

export default GifList;

import React, { Component } from 'react';
import GifCard from '../GifCard';
import './style.css';

class GifList extends Component {
  state = { loadedGifs: [] };

  componentDidUpdate(prevProps, prevState) {
    console.log('isSearch', this.props.isSearch);
    if (prevProps !== this.props) {
      this.setState({
        loadedGifs: []
      });
    }
  }

  sortLoading = item => {
    let updatedGifs = this.state.loadedGifs;
    updatedGifs.push({ imgPath: item.images.fixed_height.url });
    this.setState({ loadedItems: updatedGifs });
  };

  render() {
    return (
      <div className="container">
        {this.state.loadedGifs.map((item, i) => (
          <GifCard src={item.imgPath} key={i} />
        ))}
        <div className="hidden">
          {this.props.gifList.map((gif, i) => (
            <img
              key={gif.id}
              id={gif.id}
              title={gif.title}
              src={gif.images.fixed_height.url}
              username={gif.username}
              onLoad={() => this.sortLoading(gif)}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default GifList;

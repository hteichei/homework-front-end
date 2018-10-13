import React, { Component } from 'react';
import './style.css';
import GifSearch from '../GifSearch';

class Header extends Component {
  render() {
    const { getTrendingGifs, getSearchResults } = this.props;
    return (
      <div className="jumbotron header">
        <h1 className="display-4">GIFmania</h1>
        <p className="lead">Find the GIF from your wildest dreams.</p>
        <hr className="my-4" />
        <GifSearch getTrending={getTrendingGifs} getSearch={getSearchResults} />
      </div>
    );
  }
}

export default Header;

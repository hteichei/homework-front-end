import React, { Component } from 'react';

import { fetchTrendingGifs, fetchGifs } from '../../services/api';
import GifList from '../GifList';
import Header from '../Header';

import './App.css';

class App extends Component {
  state = {
    gifs: [],
    error: ''
  };

  componentDidMount() {
    this.fetchTrendingGifs();
  }

  setError = () => {
    this.setState({
      error: 'There has been an error.  Please try again'
    });
  };

  fetchTrendingGifs = async () => {
    try {
      const response = await fetchTrendingGifs();

      this.setState({
        gifs: response.data.data,
        error: ''
      });
    } catch (error) {
      console.log(error);
      this.setError();
    }
  };

  fetchGifsBySearch = async searchTerm => {
    try {
      const response = await fetchGifs(searchTerm);

      this.setState({
        gifs: response.data.data
      });
    } catch (error) {
      console.log(error);
      this.setError();
    }
  };

  render() {
    if (this.state.error) {
      return <div>{this.state.error}</div>;
    }
    return (
      <div className="App">
        <Header
          getSearchResults={this.fetchGifsBySearch}
          getTrendingGifs={this.fetchTrendingGifs}
        />

        <GifList gifList={this.state.gifs} />
      </div>
    );
  }
}

export default App;

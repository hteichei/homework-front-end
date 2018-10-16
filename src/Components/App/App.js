import React, { Component } from 'react';

import { fetchTrendingGifs, fetchGifs } from '../../services/api';
import GifList from '../GifList';
import Header from '../Header';

import './App.css';

class App extends Component {
  state = {
    gifs: [],
    isSearch: false,
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
      this.setState({
        isSearch: false
      });
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
      this.setState({
        isSearch: true
      });
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
    const { error, gifs } = this.state;
    return (
      <div className="App">
        <Header
          getSearchResults={this.fetchGifsBySearch}
          getTrendingGifs={this.fetchTrendingGifs}
        />

        <GifList gifList={gifs} isSearch={this.state.isSearch} />
        <hr />
        {error && <div style={{ color: '#900' }}>{error}</div>}
      </div>
    );
  }
}

export default App;

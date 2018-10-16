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

  handleNoMatch = () => {
    this.setState({
      error: 'NO GIFS MATCH THOSE SERACH RESULTS.  PLEASE TRY AGAIN'
    });
  };

  clearErrors = () => {
    this.setState({
      error: ''
    });
  };

  fetchTrendingGifs = async () => {
    try {
      this.clearErrors();
      const response = await fetchTrendingGifs();

      this.setState({
        gifs: response.data.data,
        error: ''
      });
    } catch (error) {
      this.setError();
    }
  };

  fetchGifsBySearch = async searchTerm => {
    try {
      this.clearErrors();
      const response = await fetchGifs(searchTerm);

      this.setState({
        gifs: response.data.data
      });
      if (!this.state.gifs.length) {
        this.handleNoMatch();
      }
    } catch (error) {
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

        <GifList gifList={gifs} error={error} />
        <hr />
        {error && (
          <div className="error" style={{ color: '#900' }}>
            {error}
          </div>
        )}
      </div>
    );
  }
}

export default App;

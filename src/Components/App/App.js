import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import GifList from '../GifList';
import Header from '../Header';

class App extends Component {
  state = {
    trendingGifs: [],
    trending: true,
    searchResults: [],
    search: false
  };

  async componentDidMount() {
    const response = await this.fetchTrendingGifs();
    this.setState({
      trendingGifs: response
    });
  }

  fetchTrendingGifs = async () => {
    try {
      const apiKey = `${process.env.REACT_APP_GIF_API_KEY}`;
      const url = `http://api.giphy.com/v1/gifs/trending?api_key=${apiKey}`;
      const response = await axios.get(url).then(res => {
        return res.data.data;
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  toggleSearchOn = () => {
    this.setState({
      ...state,
      searchResults: [],
      search: true
    });
  };

  fetchGifsBySearch = async searchParams => {
    try {
      //clear previous search results in state before new request
      //set this.state.search to true

      this.toggleSearchOn();
      const apiKey = `${process.env.REACT_APP_GIF_API_KEY}`;
      let searchParams = 'funny cat';
      const url = `http://api.giphy.com/v1/gifs/search?q=${searchParams}&api_key=${apiKey}`;
      const response = await axios.get(url).then(res => {
        return res.data.data;
      });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div className="App">
        <Header />
        <GifList
          gifList={
            //if search is active, render search results, otherwise render trending gifs
            this.state.search
              ? this.state.searchResults
              : this.state.trendingGifs
          }
        />
      </div>
    );
  }
}

export default App;

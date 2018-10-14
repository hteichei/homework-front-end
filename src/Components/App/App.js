import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import GifList from '../GifList';
import Header from '../Header';

class App extends Component {
  state = {
    trendingGifs: [],
    search: false,
    searchResults: []
  };

  async componentDidMount() {
    this.fetchTrendingGifs();
  }

  fetchTrendingGifs = async () => {
    try {
      this.toggleSearchOff();
      const apiKey = `${process.env.REACT_APP_GIF_API_KEY}`;
      const limit = 20;
      const weirdness = 10;
      const url = `http://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=${limit}&weirdness=${weirdness}`;
      const response = await axios.get(url).then(res => {
        console.log('trendingGifs', res.data.data);
        return res.data.data;
      });
      this.setState({
        trendingGifs: response,
        ...this.state.search,
        ...this.state.searchResults
      });
    } catch (error) {
      console.log(error);
    }
  };

  toggleSearchOn = () => {
    this.setState({
      ...this.state,
      search: true,
      searchResults: []
    });
  };

  toggleSearchOff = () => {
    this.setState({
      ...this.state,
      search: false,
      searchResults: []
    });
  };

  handleSearchInput = searchParams => {
    let newSearchStr = searchParams
      .trim()
      .split(' ')
      .join('+');
    return newSearchStr;
  };

  fetchGifsBySearch = async searchParams => {
    try {
      //clear previous search results in state before new request
      //set this.state.search to true

      this.toggleSearchOn();
      //format search form input for api call
      let queryString = this.handleSearchInput(searchParams);

      const apiKey = `${process.env.REACT_APP_GIF_API_KEY}`;
      const url = `http://api.giphy.com/v1/gifs/search?q=${queryString}&api_key=${apiKey}`;
      const response = await axios.get(url).then(res => {
        console.log('searchGifs', res.data.data);
        return res.data.data;
      });
      this.setState({
        ...this.state,
        searchResults: response
      });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div className="App">
        <Header
          getSearchResults={this.fetchGifsBySearch}
          getTrendingGifs={this.fetchTrendingGifs}
        />
        <GifList
          gifList={
            //if search is active, render search results, otherwise render trending gifs
            this.state.search
              ? this.state.searchResults
              : this.state.trendingGifs
          }
          isSearch={this.state.search}
        />
      </div>
    );
  }
}

export default App;

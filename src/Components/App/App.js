import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import GifList from '../GifList';
import Header from '../Header';

class App extends Component {
  state = { gifs: [] };

  async componentDidMount() {
    const response = await this.fetchTrendingGifs();
    this.setState({
      gifs: response
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

  render() {
    return (
      <div className="App">
        <Header />
        <GifList gifList={this.state.gifs} />
      </div>
    );
  }
}

export default App;

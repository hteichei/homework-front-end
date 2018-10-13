import React, { Component } from 'react';
import axios from 'axios';
import GifCard from '../GifCard';

class GifList extends Component {
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
    const grid = this.state.gifs.map(gif => {
      return (
        <GifCard
          key={gif.id}
          id={gif.id}
          title={gif.title}
          src={gif.embed_url}
          username={gif.username}
        />
      );
    });
    return <div>{grid}</div>;
  }
}

export default GifList;

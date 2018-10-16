import axios from 'axios';

const API_KEY = 'zwYTEATpExYi09jPTeAYdBJfFfV8MmjJ';
const GIF_LIMIT = 50;
const weirdness = 10;

const API = axios.create({
  baseURL: 'http://api.giphy.com/v1/gifs/',
  params: {
    api_key: API_KEY,
    limit: GIF_LIMIT,
    weirdness
  }
});

export const fetchTrendingGifs = () => {
  return API.get('/trending');
};

export const fetchGifs = searchTerm => {
  return API.get('/search', {
    params: { q: searchTerm }
  });
};

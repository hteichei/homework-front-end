import axios from 'axios';

const API_KEY = 'M7ABgCOQ4euV5S5F2ijDKbRrIQmttOxI';
const GIF_LIMIT = 50;

const API = axios.create({
  baseURL: 'http://api.giphy.com/v1/gifs/',
  params: {
    api_key: API_KEY,
    limit: GIF_LIMIT
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

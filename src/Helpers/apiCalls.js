import apiKey from './constants';
import url from './constants';

export async function fetchTrendingGifs() {
  try {
    const response = await axios.get(url).then(res => res.data.data);
    return response;
  } catch (error) {
    console.log(error);
  }
}

import axios from 'axios';

const apiKey= "2oi6EvYANvL8dRDZulUIJxxERwWzN0bj"

export const getGif = async () => {
  const gifData = await axios.get(`https://cors-anywhere.herokuapp.com/https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=win&limit=1&offset=0&rating=G&lang=en`)
  return gifData.data.data[0].url;
}
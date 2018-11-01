import axios from "axios";
import keys from "../config/keys";

const omdbApiRequest = async (movieName, movieYear) => {
  const omdbApiKey = keys.omdbApiKey;
  const response = await axios.get(
    `http://www.omdbapi.com/?t=${movieName}&y=${movieYear}&apikey=${omdbApiKey}`
  )
  return response.data;
};

export default omdbApiRequest;

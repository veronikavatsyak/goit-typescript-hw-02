import axios from "axios";

const API_KEY = "iHvwLC1lT-y72DrjyfahR1bI2HeQRQrvfnQJQyTFwAg";
const fetchImages = async (query, page) => {
  const response = await axios.get(
    `https://api.unsplash.com/search/photos?client_id=${API_KEY}&query=${query}&page=${page}`
  );
  return response.data;
};
export default fetchImages;

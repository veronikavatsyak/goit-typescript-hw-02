import axios from "axios";
import { Response } from "../types";

const API_KEY: string = "iHvwLC1lT-y72DrjyfahR1bI2HeQRQrvfnQJQyTFwAg";
const fetchImages = async (query: string, page: number): Promise<Response> => {
  const response = await axios.get<Response>(
    `https://api.unsplash.com/search/photos?client_id=${API_KEY}&query=${query}&page=${page}`
  );
  return response.data;
};
export default fetchImages;

import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie",
  params: {
    api_key: import.meta.env.VITE_TMDB_API_KEY,
    language: "ko",
  },
});

export default instance;

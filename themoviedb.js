import axios from 'axios';


const API_KEY = 'fcb98e3acc4503ce4e709825278891ec';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';


export const fetchTrendingMovies = async () => {
  const response = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);
  return response.data.results;
};


export const fetchSearchMovies = async (query) => {
  const response = await axios.get(
    `/search/movie?api_key=${API_KEY}&query=${query}&language=en-US`
  );
  return response.data.results;
};


export const fetchMovieDetails = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}?api_key=${API_KEY}`);
  return response.data;
};


export const fetchMovieCast = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}/credits?api_key=${API_KEY}`);
  return response.data.cast;
};


export const fetchMovieReviews = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}/reviews?api_key=${API_KEY}`);
  return response.data.results;
};
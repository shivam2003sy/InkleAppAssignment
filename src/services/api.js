// api.js
import axios from 'axios';
import { options } from './config';

const BaseUrl = 'https://api.themoviedb.org/3';

const getPopularMovies = async () => {
  try {
    const response = await axios.get(`${BaseUrl}/movie/popular`, options);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching popular movies:', error);
    return [];
  }
};

const getTopRatedMovies = async () => {
  try {
    const response = await axios.get(`${BaseUrl}/movie/top_rated`, options);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching top rated movies:', error);
    return [];
  }
};

const getUpcomingMovies = async () => {
  try {
    const response = await axios.get(`${BaseUrl}/movie/upcoming`, options);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching upcoming movies:', error);
    return [];
  }
};

const getNowPlayingMovies = async () => {
  try {
    const response = await axios.get(`${BaseUrl}/movie/now_playing`, options);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching now playing movies:', error);
    return [];
  }
};


// tv shows 
const getPopularTvShows = async () => {
  try {
    const response = await axios.get(`${BaseUrl}/tv/popular`, options);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching popular tv shows:', error);
    return [];
  }
};

const getTopRatedTvShows = async () => {
  try {
    const response = await axios.get(`${BaseUrl}/tv/top_rated`, options);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching top rated tv shows:', error);
    return [];
  }
};

const getOnTheAirTvShows = async () => {
  try {
    const response = await axios.get(`${BaseUrl}/tv/on_the_air`, options);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching on the air tv shows:', error);
    return [];
  }
}

const getAiringTodayTvShows = async () => {
  try {
    const response = await axios.get(`${BaseUrl}/tv/airing_today`, options);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching airing today tv shows:', error);
    return [];
  }
}



// search movies or tv shows  by query

const searchMovies = async (query) => {
  try {
    const response = await axios.get(`${BaseUrl}/search/movie?query=${query}`, options);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching search movies:', error);
    return [];
  }
};

const searchTvShows = async (query) => {
  try {
    const response = await axios.get(`${BaseUrl}/search/tv?query=${query}`, options);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching search tv shows:', error);
    return [];
  }
};

export { getPopularMovies, getTopRatedMovies, getUpcomingMovies, getNowPlayingMovies , getPopularTvShows, getTopRatedTvShows, getOnTheAirTvShows, getAiringTodayTvShows , searchMovies, searchTvShows};
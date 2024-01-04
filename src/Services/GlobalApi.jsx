import axios from "axios";
import React from "react";

const movieBaseUrl = "https://api.themoviedb.org/3";
const api_key = "c1a5ae6db9c4e0f5d1a078a27621db3b";

const movieByGenreBaseURL =
  "https://api.themoviedb.org/3/discover/movie?api_key=c1a5ae6db9c4e0f5d1a078a27621db3b";

//https://api.themoviedb.org/3/trending/all/day?api_key=2ec0d66f5bdf1dd12eefa0723f1479cf

const getTrendingVideos = axios.get(
  movieBaseUrl + "/trending/all/day?api_key=" + api_key
);

const getMovieByGenreId = (id) =>
  axios.get(movieByGenreBaseURL + "&with_genres=" + id);

export default {
  getTrendingVideos,
  getMovieByGenreId,
};

import axios from 'axios';

export { services };

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '2e9f8fc9479fa19131d9c8fc8ea7c110';

const categories = {
  trending: '/trending/all/week',
  querySearch: '/search/movie',
  genre: '/genre/movie/list',
  basic: '&language=en-US',
};

//proxi
const services = {
  getMovies: async function (page = 1
    ) {
    try {
      const url = `${BASE_URL}${categories.trending}?api_key=${API_KEY}${categories.basic}&page=${page}`;
      const response = await axios.get(url);
      const movies = response;
      // console.log(response.data.results);
      return movies.data.results;
    } catch (error) {
      console.log('hola desde error');
      console.error(error);
    }
  },
  getMoviesByKeyWord: async function (keyWord, page = 1) {
    try {
      const url = `${BASE_URL}${categories.querySearch}?api_key=${API_KEY}&query=${keyWord}${categories.basic}&page=${page}`;
      const response = await axios.get(url);
      const movies = response;
      console.log(movies.data)
      return movies.data;
    } catch (error) {
      console.log('hola desde error');
      console.error(error);
    }
  },
  getInfoMovieById: async function (movieId) {
    try {
      const url = `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}${categories.basic}`;
      const response = await axios.get(url);
      const movie = response;
      console.log(movie.data);
      return movie.data;
    } catch (error) {
      console.log('hola desde error');
      console.error(error);
    }
  },
  getInfoVideoById: async function (movieId) {
    try {
      const url = `${BASE_URL}/movie/${movieId}/videos?api_key=${API_KEY}${categories.basic}`;
      const response = await axios.get(url);
      const video = response;
      console.log(video.data.results);
      return video.data;
    } catch (error) {
      console.log('hola desde error');
      console.error(error);
    }
  },
  getArrayMovies: async function (array) {
    const arrayOfMovies = array.map(async movieId => {
      return await axios
        .get(
          `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}${categories.basic}`
        )
        .then(response => {
          return response.data;
        })
        .catch(error => console.log(error));
    });
     const resultData = await Promise.all(arrayOfMovies);
    //  console.log(resultData)
    return resultData;
  },
};
// 
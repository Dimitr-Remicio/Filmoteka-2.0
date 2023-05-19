
const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '2e9f8fc9479fa19131d9c8fc8ea7c110';

const categories = {
  trending: '/trending/all/week',
  querySearch: '/search/movie',
  genre: '/genre/movie/list',
  basic: '&language=en-US',
};
const services = {
  getMovies: async function(page = 1) {
    try {
      const url = `${BASE_URL}${categories.trending}?api_key=${API_KEY}${categories.basic}&page=${page}`;
      const response = await fetch(url);
      const movies = await response.json();
      console.log(movies)
      return movies.results;
    } catch (error) {
      console.log('hola desde error');
      console.error(error);
    }
  }
};


const genresAll = {
  12: 'Adventure',
  14: 'Fantasy',
  16: 'Animation',
  18: 'Drama',
  27: 'Horror',
  28: 'Action',
  35: 'Comedy',
  36: 'History',
  37: 'Western',
  53: 'Thriller',
  80: 'Crime',
  99: 'Documentary',
  878: 'Science Fiction',
  9648: 'Mystery',
  10402: 'Music',
  10749: 'Romance',
  10751: 'Family',
  10752: 'War',
  10770: 'TV Movie',
};

function getSome(idArr) {

  const len = idArr.length;
  if (len === 0) return '';

  let n = [];
  for (let i = 0; i < Math.min(2, len); i += 1) {
    n.push(getName(idArr[i]));
  }
  if (len > 2) n.push('Other');

  return n.join(', ');
}

function getName(id) {
  return genresAll[id] || `Unknown genre(${id})`;
}


let currentPage = 1;

let markup = '';
const cardsMovies = document.querySelector('.cardsMovie');
const baseImageUrl = 'https://image.tmdb.org/t/p/';

const layoutUtils = {
  // getMoviesIds: function (movies){
  //   const movieIds = [];
  //   movies.map(({id})=>{
  //     movieIds.push(id)
  //   })
  //   return movieIds;
  // },
  renderImages: function (movies) {
    markup += movies
      .map(({ poster_path, original_title, release_date, genre_ids, id }) => {
        return `<li class="movie-card" onclick="addModalPoster(event)" data-value="${id}" >
            <img class='cardsMovie__image' src='${baseImageUrl}w500${poster_path}' alt='image movie' data-toggle="modal" data-target="#posterModal" />
            <h2 class="movie__title">${original_title}</h2>
            <p class="movie__genre">${getSome(genre_ids)}<span class="movie__popular">${release_date}</span></p>
      
            
            </li>`;
      })
      .join('');
    cardsMovies.innerHTML = markup;
  },
  refreshMovieList: async function () {
    const movies = await services.getMovies();
    // console.log(movies);
    // const arrayMovies =  this.getMoviesIds(movies)
    // console.log(arrayMovies)
    // const arrayMoviesList = await services.getArrayMovies(arrayMovies);
    // console.log(arrayMoviesList);
    return this.renderImages(movies);
  },
};

// const arrayMovies = layoutUtils.refreshMovieList();

  layoutUtils.refreshMovieList();

// console.log(services.getMovies())

// console.log(services.getMoviesByKeyWord('rapido y furioso'))
// console.log(services.getInfoMovieById(713704));
// console.log(services.getInfoVideoById(713704));
// console.log( await services.getArrayMovies(arrayMovies));

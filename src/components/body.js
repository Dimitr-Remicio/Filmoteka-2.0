'use strict';

import { services } from '../js/api-consume';
import { getName, getSome } from '../js/genres';
import './bodyStyles.scss';

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
      .map(({ poster_path, original_title, release_date, genre_ids}) => {
        return `<li class="movie-card">
            <img class='cardsMovie__image' src='${baseImageUrl}w500${poster_path}' alt='image movie'/>
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

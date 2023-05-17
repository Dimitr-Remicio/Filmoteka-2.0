'use strict';

import { services } from '../js/api-consume';
import './bodyStyles.scss';

let markup = '';
const cardsMovies = document.querySelector('.cardsMovie');
const baseImageUrl = 'https://image.tmdb.org/t/p/';

const layoutUtils = {
  getMoviesIds: function (movies){
    const movieIds = [];
    movies.map(({id})=>{
      movieIds.push(id)
    })
    return movieIds;
  },
  renderImages: function (movies) {
    markup += movies
      .map(({ backdrop_path }) => {
        return `<li>
            <img class='cardsMovie__image' src='${baseImageUrl}w500${backdrop_path
            }' alt='image movie'/>
            </li>`;
      })
      .join('');
    cardsMovies.innerHTML = markup;
  },
  refreshMovieList: async function () {
    const movies = await services.getMovies();
    console.log(movies);
    const arrayMovies =  this.getMoviesIds(movies)
    console.log(arrayMovies)
    const arrayMoviesList = await services.getArrayMovies(arrayMovies);
    console.log(arrayMoviesList);
    return this.renderImages(arrayMoviesList);
  },
};

// const arrayMovies = layoutUtils.refreshMovieList();
layoutUtils.refreshMovieList();

// console.log(services.getMovies())

// console.log(services.getMoviesByKeyWord('rapido y furioso'))
// console.log(services.getInfoMovieById(713704));
// console.log(services.getInfoVideoById(713704));
// console.log( await services.getArrayMovies(arrayMovies));

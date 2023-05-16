'use strict';

import { data, services } from '../js/api-consume';
import './bodyStyles.scss';

let markup = '';
const cardsMovies = document.querySelector('.cardsMovie');
const baseImageUrl = 'https://image.tmdb.org/t/p/';


const layoutUtils = {
  renderImages: function (movies) {
    markup += movies
      .map(({ backdrop_path }) => {
        return `<li>
            <img class='cardsMovie__image' src='${baseImageUrl}w500${backdrop_path}' alt='image movie'/>
            </li>`;
      })
      .join('');
    cardsMovies.innerHTML = markup;
  },
  refreshMovieList: async function () {
    const movies = await services.getMovies();
    return this.renderImages(movies);
  },
};

layoutUtils.refreshMovieList();

// console.log(services.getMoviesByKeyWord('rapido y furioso'))
// console.log(services.getInfoMovieById(713704));
// console.log(services.getInfoVideoById(713704));
console.log(services.getArrayMovies([713704]));

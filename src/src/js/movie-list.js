'use strict';

import { services } from '../js/api-consume';
import { getName, getSome } from '../js/genres';
import '../components/body';

let markup = '';
const cardsMovies = document.querySelector('.movielist__cardsMovie');
const baseImageUrl = 'https://image.tmdb.org/t/p/';

const layoutUtils = {
  renderImages: function (movies) {
    console.log(movies);
    markup += movies
      .map(({ poster_path, original_title, release_date, genres }) => {
        return `<li class="movie-card" onclick="addModalPoster(event)" >
            <img class='cardsMovie__image' src='${baseImageUrl}w500${poster_path}' alt='image movie' data-toggle="modal" data-target="#posterModal" />
            <h2 class="movie__title">${original_title}</h2>
            <p class="movie__genre">${getSome(genres)}<span class="movie__popular">${release_date}</span></p>
      
            
            </li>`;
      })
      .join('');
    cardsMovies.innerHTML = markup;
  },
  refreshMovieList: async function (id) {
    let movies = [];
    movies.push(await services.getInfoMovieById(id));
    return this.renderImages(movies);
  },
};

// const arrayMovies = layoutUtils.refreshMovieList();
const libraryLink = document.querySelector('.header__watched');
const homeLink = document.querySelector('.header__queue');

//Se agrego evento para mostrar la lista de peliculas vistas
libraryLink.addEventListener('click', () => {
  cardsMovies.innerHTML = '';
  markup = '';
  const watchedMovies = JSON.parse(localStorage.getItem('watchedMovies')) || [];
  if (watchedMovies == []) {

  } else {
    watchedMovies.forEach(movie => {
      const movies = layoutUtils.refreshMovieList(movie.id);
    });
    // return layoutUtils.renderImages(movies);
  }
});


//Se agrego evento para mostrar la lista de peliculas por ver
homeLink.addEventListener('click', () => {
  cardsMovies.innerHTML = '';
  markup = '';
  const queueMovies = JSON.parse(localStorage.getItem('queueMovies')) || [];
  if (queueMovies == []) {

  } else {
    queueMovies.forEach(movie => {
      const movies = layoutUtils.refreshMovieList(movie.id);
    });
    // return layoutUtils.renderImages(movies);
  }
});



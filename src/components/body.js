'use strict'

import { data, services } from "../js/api-consume";
import './bodyStyles.scss'

// console.log(services.getMovies())
let markup = "";
// const movies = services.getMovies();
const cardsMovies = document.querySelector('.cardsMovie');
const baseImageUrl = 'https://image.tmdb.org/t/p/';
// const urlPoster = `${baseImageUrl}w500${data.poster_path}`;
console.log(cardsMovies)

const layoutUtils = {
    renderImages: function(movies){
        markup += movies.map(({backdrop_path}) => {
            return`<img class='cardsMovie__image' src='${baseImageUrl}w500${backdrop_path}' alt='image movie'/>`;
        }).join("");
        cardsMovies.innerHTML = markup;
    },
    refreshMovieList: async function(){
        const movies = await services.getMovies();
        return this.renderImages(movies);
        
    }
    
}

layoutUtils.refreshMovieList();




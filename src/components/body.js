'use strict';
import { services } from '../js/api-consume';
import { getSome } from '../js/genres';
import './bodyStyles.scss';

let currentPage = 1;
let markup = '';
const cardsMovies = document.querySelector('.cardsMovie');
const baseImageUrl = 'https://image.tmdb.org/t/p/';

const layoutUtils = {
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
    const movies = await services.getMovies(currentPage);
    return this.renderImages(movies);
  },
};

layoutUtils.refreshMovieList();


const ulTag = document.querySelector('.paginationList');

let totalPages = 20;
let page = 5;

function element(totalPages, page) {
  let liTag = '';
  let activeLi;
  let beforePages = page - 1;
  let afterPages = page + 1;
  if (page > 1) {
    liTag += `<li class="btn prev" onclick="element(totalPages, ${page - 1})"><span><i class="fas fa-angle-left"></i>Prev</span></li>`;
  }

  if (page > 2) {
    liTag += `<li class="numb" onclick="element(totalPages, 1)"><span>1</span></li>`;
    if (page > 3) {
      liTag += `<li class="dots"><span>...</span></li>`;
    }
  }

  if(page==totalPages){
    beforePages = beforePages - 2;
  }else if(page==totalPages -1){
    beforePages = beforePages - 1;
  }

  if(page==1){
    afterPages = afterPages + 2;
  }else if(page==2){
    afterPages = afterPages + 1;
  }

  for (let pageLength = beforePages; pageLength <= afterPages; pageLength++) {
    if(pageLength > totalPages){
        continue;
    }
    if(pageLength == 0){
        pageLength = pageLength + 1;
    }
    if (page == pageLength) {
      activeLi = 'active';
    } else {
      activeLi = '';
    }
    liTag += `<li class="numb ${activeLi}" onclick="element(totalPages, ${pageLength})"><span>${pageLength}</span></li>`;
  }

  if (page < totalPages - 1) {
    if (page < totalPages - 2) {
      liTag += `<li class="dots"><span>...</span></li>`;
    }
    liTag += `<li class="numb" onclick="element(totalPages, ${totalPages})"><span>${totalPages}</span></li>`;
  }

  if (page < totalPages) {
    liTag += `<li class="btn next" onclick="element(totalPages, ${page + 1})"><span>Next<i class="fas fa-angle-right"></i></span></li>`;
  }
  ulTag.innerHTML = liTag;
}

element(totalPages, page);

const elementLista = document.querySelectorAll("li, span");

ulTag.addEventListener("click", (e) => {
  markup=''
  if (e.target.tagName === "LI" || e.target.tagName === "SPAN") {
    const activeElement = document.querySelector("li.active");
    if (activeElement) {
      const activeValue = activeElement.innerText;
      currentPage = activeValue;
      console.log(currentPage)
      console.log(activeValue);
      layoutUtils.refreshMovieList();
    }
  }
});

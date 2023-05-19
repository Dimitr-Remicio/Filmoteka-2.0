import { data, services } from '../js/api-consume';
import { getName, getSome } from '../js/genres';

// Obtener elementos del DOM
const searchInput = document.getElementById('search');
const searchForm = document.querySelector('.search-form');
const cardsMovieList = document.querySelector('.cardsMovie');
// Agregar evento de envío de formulario
searchForm.addEventListener('submit', async (e) => {
  e.preventDefault(); // Evitar el comportamiento predeterminado del formulario
  const keyword = searchInput.value;
  if (keyword.trim() !== '') {
    try {
      const movies = await services.getMoviesByKeyWord(keyword);
      // Limpiar la lista de tarjetas de películas
      cardsMovieList.innerHTML = '';
      // Mostrar los resultados en la lista
      // console.log(movies.results, movies);

      movies.results.forEach((movie) => {
        const movieCard = createMovieCard(movie);
        cardsMovieList.appendChild(movieCard);
      });
    } catch (error) {
      console.error(error);
    }
  }
});
// Función para crear una tarjeta de película
function createMovieCard(movie) {
  // console.log(movie);
  const { title, poster_path, release_date, popularity, genre_ids } = movie;
  const movieCard = document.createElement('li');
  movieCard.classList.add('movie-card');
  movieCard.setAttribute("onClick", "addModalPoster(event)");

  const moviePoster = document.createElement('img');
  moviePoster.src = poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : 'https://i.postimg.cc/SKKfTyxF/no-image-black.jpg';
  moviePoster.alt = title;
  moviePoster.setAttribute("data-toggle", "modal");
  moviePoster.setAttribute("data-target", "#posterModal")
  moviePoster.classList.add('cardsMovie__image');

  const movieTitle = document.createElement('h2');
  movieTitle.classList.add('movie__title');
  movieTitle.textContent = title;

  const movieGenre = document.createElement('p');
  movieGenre.classList.add('movie__genre');
  movieGenre.textContent = `${getSome(genre_ids)} | ${release_date}`;

  const moviePopular = document.createElement('span');
  moviePopular.classList.add('movie__popular');
  moviePopular.textContent = `${popularity}`;

  movieGenre.appendChild(moviePopular);

  movieCard.appendChild(moviePoster);
  movieCard.appendChild(movieTitle);
  movieCard.appendChild(movieGenre);

  return movieCard;
}
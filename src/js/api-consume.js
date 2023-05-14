import axios from 'axios';

export {services};

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '2e9f8fc9479fa19131d9c8fc8ea7c110';
let apiUrlById = 'https://api.themoviedb.org/3/movie/2';
// const apiUrl = 'https://api.themoviedb.org/3';

const categories = {
    trending: '/trending/movie/week',
    querySearch: '/search/movie',
    genre: '/genre/movie/list',
    basic: '&language=en-US&page=1&include_adult=false',
  };

// construimos la URL completa con la clave de API
// const urlbyId = `${apiUrlById}?api_key=${API_KEY}`;



//proxi
const services = {
  getMovies: async function(idMovie,searchTerm, page,RESULTS_PER_PAGE){
    try {
      // console.log('hola desde inicio axios')
      const url = `${BASE_URL}${categories.trending}?api_key=${API_KEY}${categories.basic}&page=1`;
      const urlbyId = `${apiUrlById}${idMovie}?api_key=${API_KEY}`;
      const response = await axios.get(url);
      const response2 = await axios.get(urlbyId);
      const movies = response;
      const movie = response2;
      // console.log('hola desde respuesta axios')
      console.log(response2.data)
      console.log(movies.data)
      console.log('hola desde fin axios')
      return movies.data.results;
    } catch (error) {
      console.log('hola desde error')
      console.error(error);
    }
  }
}


// URL base para las imágenes de la API
const baseImageUrl = 'https://image.tmdb.org/t/p/';
// const urlPoster = `${baseImageUrl}w500${data.poster_path}`;


// Seleccionamos el elemento HTML donde se mostrará el título
// const tituloPelicula = document.getElementById('titulo-pelicula');
// const overview = document.getElementById('descripcion-pelicula');
// const lanzamiento = document.getElementById('ano-lanzamiento');
// const posterPelicula = document.getElementById('poster-pelicula');

// Hacer la solicitud GET a la API
// export const data = fetch(url)
//   .then(response => response.json())
//   .then(data => {
    // mostramos los datos de respuesta en consola
    // console.log(data);

    // trabajamos los datos
    // const titulo = data.title;
    // const resumen = data.overview;
    // const relase = data.release_date;
    
    
    // Actualizar el contenido del elemento HTML con el título de la película
    // tituloPelicula.textContent = titulo;
    // overview.textContent = resumen;
    // lanzamiento.textContent = relase;
    // posterPelicula.src = urlPoster;
  //   return data;
  // })
  // .catch(error => {
  //   // Manejo de errores
  //   console.log('Ha ocurrido un error:', error);
  // });
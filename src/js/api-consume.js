const apiKey = '2e9f8fc9479fa19131d9c8fc8ea7c110';
const apiUrl = 'https://api.themoviedb.org/3/movie/2';
//const apiUrl = 'https://api.themoviedb.org/3';

const categories = {
    trending: '/trending/movie/week',
    querySearch: '/search/movie',
    genre: '/genre/movie/list',
    basic: '&language=en-US&page=1&include_adult=false',
  };

// construimos la URL completa con la clave de API
const url = `${apiUrl}?api_key=${apiKey}`;
//const url = `${apiUrl}${categories.trending}?api_key=${apiKey}${categories.basic}&page=1`;

// URL base para las imágenes de la API
const baseImageUrl = 'https://image.tmdb.org/t/p/';

// Seleccionamos el elemento HTML donde se mostrará el título
const tituloPelicula = document.getElementById('titulo-pelicula');
const overview = document.getElementById('descripcion-pelicula');
const lanzamiento = document.getElementById('año-lanzamiento');
const posterPelicula = document.getElementById('poster-pelicula');

// Hacer la solicitud GET a la API
fetch(url)
  .then(response => response.json())
  .then(data => {
    // mostramos los datos de respuesta en consola
    console.log(data);

    // trabajamos los datos
    const titulo = data.title;
    const resumen = data.overview;
    const relase = data.release_date;
    const urlPoster = `${baseImageUrl}w500${data.poster_path}`;
    
    // Actualizar el contenido del elemento HTML con el título de la película
    tituloPelicula.textContent = titulo;
    overview.textContent = resumen;
    lanzamiento.textContent = relase;
    posterPelicula.src = urlPoster;
  })
  .catch(error => {
    // Manejo de errores
    console.log('Ha ocurrido un error:', error);
  });
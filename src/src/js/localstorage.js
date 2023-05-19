// Obtener elementos del DOM
const watchedButton = document.querySelector('.modal-watched');
const queueButton = document.querySelector('.modal-queue');

// Agregar manejador de evento al botón "Watched" (Vistas)
watchedButton.addEventListener('click', () => {
  // Crear objeto de datos de la película
  const movieData = {
    id: `${watchedButton.id}`,
    // Agrega las propiedades de la película que desees almacenar
  };

  // Obtener las películas vistas del Local Storage (si existen)
  const watchedMovies = JSON.parse(localStorage.getItem('watchedMovies')) || [];

  // Agregar la película actual a la lista de películas vistas
  const movieExists = watchedMovies.some(movie => movie.id === movieData.id);
  if (movieExists) {
    console.log('La película ya está en la lista:', watchedMovies);
    return;
  }

  watchedMovies.push(movieData);

  // Actualizar el Local Storage con la nueva lista de películas vistas
  localStorage.setItem('watchedMovies', JSON.stringify(watchedMovies));

  // Imprimir mensaje en la consola
  console.log('Película marcada como vista');
});

// Agregar manejador de evento al botón "Queue" (Cola)
queueButton.addEventListener('click', () => {
  // Crear objeto de datos de la película
  const movieData = {
    id: `${watchedButton.id}`,
    // Agrega las propiedades de la película que desees almacenar
  };

  // Obtener la lista de películas en cola del Local Storage (si existe)
  const queueMovies = JSON.parse(localStorage.getItem('queueMovies')) || [];

  const movieExists = queueMovies.some(movie => movie.id === movieData.id);
  if (movieExists) {
    console.log('La película ya está en la lista:', queueMovies);
    return;
  }

  // Agregar la película actual a la lista de películas en cola
  queueMovies.push(movieData);

  // Actualizar el Local Storage con la nueva lista de películas en cola
  localStorage.setItem('queueMovies', JSON.stringify(queueMovies));

  // Imprimir mensaje en la consola
  console.log('Película agregada a la cola');
});
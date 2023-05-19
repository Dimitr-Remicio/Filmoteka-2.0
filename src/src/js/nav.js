

// Seleccionamos el elemento con la clase "header--nav" que contiene los enlaces del menú
const nav = document.querySelector('.header__nav');

// Función para mostrar la sección correspondiente al hacer click en el enlace del menú
const ShowNav = (e) => {

  console.log(e.target.dataset.value);
  // Ocultamos las secciones "search" y "library"
  document.querySelector('.header--search').style.display = "none";
  document.querySelector('.header--library').style.display = "none";
  // Mostramos la sección correspondiente al enlace del menú que se hizo click
  document.querySelector(`.header--${e.target.dataset.value}`).style.display = "flex";
  // Removemos la clase "active" de todos los enlaces del menú
  document.querySelectorAll('.menu').forEach((item) => {
    item.classList.remove('active')
  });
  // Añadimos la clase "active" al enlace del menú que se hizo click, excepto si se hizo click en el enlace "search"
  if (e.target.dataset.value == "search") {
    document.querySelector('.menu').classList.add('active');
  } else {
    e.target.classList.add('active');
  }
}

// Ocultamos la sección "library" y añadimos la clase "active" al enlace "Home"
document.querySelector('.header--library').style.display = "none";
document.querySelector('.menu').classList.add('active');

// Agregamos el evento "click" a la sección del menú para ejecutar la función "ShowNav"
nav.addEventListener('click', ShowNav);

// Seleccionamos los enlaces "library" y "Home" del menú, y el elemento "header" que contiene toda la cabecera
const libraryLink = document.querySelector('.nav__item[data-value="library"]');
const homeLink = document.querySelector('.nav__item[data-value="search"]');
const header = document.querySelector('.header');

// Agregamos el evento "click" al enlace "library" para cambiar el estilo de la cabecera a "header-library"
libraryLink.addEventListener('click', () => {
  header.classList.remove('header-home');
  header.classList.add('header-library');
  document.querySelector('.body-movies').style.display = "none";
  document.querySelector('.movielist').style.display = "flex";
});

// Agregamos el evento "click" al enlace "Home" para cambiar el estilo de la cabecera a "header-home"
homeLink.addEventListener('click', () => {
  header.classList.remove('header-library');
  header.classList.add('header-home');
  document.querySelector('.body-movies').style.display = "flex";
  document.querySelector('.movielist').style.display = "none";
});

// Agregamos la clase "header-home" a la cabecera por defecto
header.classList.add('header-home');
document.querySelector('.movielist').style.display = "none";


function refreshPage() {
  window.location.reload();
} 
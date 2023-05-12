const nav = document.querySelector('.header--nav');

const ShowNav = (e) => {
  console.log(e.target.dataset.value);
  document.querySelector('.header--search').style.display = "none";
  document.querySelector('.header--library').style.display = "none";
  document.querySelector(`.header--${e.target.dataset.value}`).style.display = "flex";
  document.querySelectorAll('.menu').forEach((item) => {
    item.classList.remove('active');
  });;
  if (e.target.dataset.value == "search") {
    document.querySelector('.menu').classList.add('active');
  }else
  e.target.classList.add('active');
}

document.querySelector('.header--library').style.display = "none";
document.querySelector('.menu').classList.add('active');
nav.addEventListener('click', ShowNav);
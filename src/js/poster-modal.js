
const members = [
  {
    "name": "Dimitr",
    "surname": "Remicio",
    "url": "https://github.com/Dimitr-Remicio",
    "role": ["Team Lead", "Web Developer"],
    "photo": "https://i.postimg.cc/SKKfTyxF/no-image-black.jpg"
  },
]


const contentModal = document.querySelector('.content_modal');
const libtn = document.querySelector('.movie-card');
const clearContent = document.querySelector('#clearModal');
const clearWhnClck = document.querySelector('.modal');



function addModalPoster(event) {
  event.preventDefault();
  
  let contentPoster = event.currentTarget.innerHTML;
  console.log(event.currentTarget.dataset.value);
  document.querySelector('.modal-watched').setAttribute('id', `${event.currentTarget.dataset.value}`);
  document.querySelector('.modal-queue').setAttribute('id', `${event.currentTarget.dataset.value}`);
  // console.log(contentPoster);


  const moviePoster = document.createElement('div');
  moviePoster.classList.add('div-example');
  // const { title, poster_path, release_date, popularity, genre_ids } = movie;

  contentModal.innerHTML = '';

  const galleryMarkup = members
    .map(
      member =>
        `
    <div class="modal-body__image">
    ${contentPoster}
    
    </div>
    
    
    `
    )
    .join('');

  contentModal.insertAdjacentHTML('afterbegin', galleryMarkup);

}
clearContent.addEventListener('click', () => {
  console.log('sirveeee el CLICKKKKKKKKKKKKKKK')

})

document.body.addEventListener("keydown", () => {
  console.clear();
  setTimeout(() => {
    contentModal.innerHTML = '';
  }, 200);
})
// clearWhnClck.addEventListener('click', () => {
// })

libtn.addEventListener('click', addModalPoster);
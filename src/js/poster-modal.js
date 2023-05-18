
const members = [
  {
    "name": "Dimitr",
    "surname": "Remicio",
    "url": "https://github.com/Dimitr-Remicio",
    "role": ["Team Lead", "Web Developer"],
    "photo": "https://i.postimg.cc/SKKfTyxF/no-image-black.jpg"
  },
]


const contentModal = document.querySelector('div.modal-body');
const libtn = document.querySelector('.movie-card');
const clearContent = document.querySelector('#clearModal');
const clearWhnClck = document.querySelector('.modal');



function addModalPoster(event){
  event.preventDefault();

  let contentPoster = event.target;
  
  console.log(contentPoster);
  
  
  const moviePoster = document.createElement('div');
  moviePoster.classList.add('div-example');
  // const { title, poster_path, release_date, popularity, genre_ids } = movie;
  
  console.log('SI SIRVEEEEEEEEEEEEEEEEEEEEEE');
  
  const galleryMarkup = members
  .map(
    member =>
    `
    <div class="modal-body__image">
    <img src="${member.photo}" alt="${member.name + member.surname}"/>
    </div>
    `
    )
    .join('');
    
    contentModal.insertAdjacentHTML('afterbegin', galleryMarkup);
    
  }
  clearContent.addEventListener('click', () => {
    contentModal.innerHTML = ''; 
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
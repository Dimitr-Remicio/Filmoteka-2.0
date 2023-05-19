import { members } from './team.js';

const galleryContainer = document.querySelector('.modal__footer-team');
const galleryMarkup = members
  .map(
    member =>
      `<li class="modal__footer-card">
        <a href="${member.url}" class="modal__footer-card--link" target="_blank">
          <div class="modal__footer-card-content">
            <div class="modal__footer-card--image">
                  <img src="${member.photo}" alt="${member.name + member.surname}"/>
            </div>
            <div class="modal__footer-card--text-content">
                    <h4 class="modal__footer-card--name">${member.name}<br/>${member.surname}</h4>
                    <p class="modal__footer-card--description" tabindex="-1">${member.role[0]}<br>${member.role[1] ? member.role[1] : '<br>'}</p>
            </div>
            <ul class="modal__footer-card--social">
                    <li><a href="${member.url}"><i class="fa-brands fa-github"></i></a></li>
                    <!--  <li><a href ="${member.url}"><i class="fa-brands fa-linkedin"></i></a></li> -->
            </ul>
          </div>
        </a>
      </li>`
  )
  .join('');

galleryContainer.insertAdjacentHTML('afterbegin', galleryMarkup);

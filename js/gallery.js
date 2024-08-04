import { cardList, picturesArray, makeElement } from './rendering-previews.js';

const bicPicture = document.querySelector('.big-picture');
const renderCallery = function () {
  cardList.addEventListener('click', (evt) => {
    //console.log('Клик');
    bicPicture.classList.remove('hidden');
    const preview = evt.target.closest('[data-preview-id]');
    if (!preview) {
      return;
    }
    evt.preventDefault();

    const currentArrayIndex = preview.dataset.previewId - 1 ;
    const currentObject = picturesArray[currentArrayIndex];

    // Адрес изображения
    const currentUrl = bicPicture.querySelector('.big-picture__img img');
    currentUrl.src = currentObject.url;
    const currentDescription = document.querySelector('.social__caption');
    currentDescription.textContent = currentObject.description;

    // Количество лайков
    const currentLikesCount = document.querySelector('.likes-count');
    currentLikesCount.textContent = currentObject.likes;

    // Общее количество комментариев к фотографии
    const currentsCommentTotalCount = document.querySelector('.social__comment-total-count');
    currentsCommentTotalCount.textContent = currentObject.comments.length;

    // Количество показанных комментариев
    const currentCommentShownCount = document.querySelector('.social__comment-shown-count');
    if (currentsCommentTotalCount.textContent >= 5) {
      currentCommentShownCount.textContent = 5;
    } else {
      currentCommentShownCount.textContent = currentsCommentTotalCount.textContent;
    }

    // Добавить класс hidden
    const tempCommentCount = document.querySelector('.social__comment-count');
    tempCommentCount.classList.add('hidden');

    const tempCommentsLoader = document.querySelector('.comments-loader');
    tempCommentsLoader.classList.add('hidden');

    const modalOpen = document.querySelector('body');
    modalOpen.classList.add('modal-open');

    // Список комментариев под фотографией
    const currentSocialComments = document.querySelector('.social__comments');
    // console.log(currentSocialComments);

    for (let i = 0; i < currentObject.comments.length; i++) {

      const socialComment = makeElement('li', 'social__comment');
      currentSocialComments.appendChild(socialComment);

      const socialPicture = makeElement ('img', 'social__picture');
      socialPicture.src = currentObject.comments[i].avatar;
      socialPicture.alt = currentObject.comments[i].name;
      socialPicture.width = 35;
      socialPicture.height = 35;
      socialComment.appendChild(socialPicture);

      const socialText = makeElement ('p', 'social__text');
      socialText.textContent = currentObject.comments[i].message;
      socialComment.appendChild(socialText);
    }
  });
};

bicPicture.addEventListener('click', () => {
  bicPicture.classList.add('hidden');

  const element = document.querySelector('.social__comments');
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
});

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    bicPicture.classList.add('hidden');

    const element = document.querySelector('.social__comments');
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
  }
});

renderCallery();

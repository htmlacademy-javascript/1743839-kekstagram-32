import {getPictures} from './data.js';
import {informationData} from './initial-data.js';

const picturesArray = getPictures();
// Для проверки соответствия данных;
// console.table(picturesArray);

const cardList = document.querySelector('.pictures');

const makeElement = function (tagName, className, text) {
  const element = document.createElement(tagName);
  element.classList.add(className);
  if (text) {
    element.textContent = text;
  }
  return element;
};

const createPreview = function (preview) {
  const fragment = document.createDocumentFragment();

  const reference = makeElement('a', 'picture');
  reference.href = '#';
  reference.dataset.previewId = preview.id;
  fragment.appendChild(reference);

  const picture = makeElement('img', 'product__image');
  picture.src = preview.url;
  picture.width = informationData.widthPreview;
  picture.height = informationData.heightPreview;
  picture.alt = preview.description;
  reference.appendChild(picture);

  const paragraf = makeElement('p', 'picture__info');
  reference.appendChild(paragraf);

  const numberComments = makeElement('span', 'picture__comments', preview.comments.length);
  paragraf.text = preview.text;
  paragraf.appendChild(numberComments);

  const numberLikes = makeElement('span', 'picture__likes', preview.likes);
  paragraf.text = preview.text;
  paragraf.appendChild(numberLikes);

  return fragment;
};

for (let i = 0; i < picturesArray.length; i++) {
  const cardItem = createPreview(picturesArray[i]);
  cardList.appendChild(cardItem);
}

export {cardList, picturesArray, makeElement};

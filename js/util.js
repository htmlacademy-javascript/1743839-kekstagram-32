import {DESCRIPTIONS_PHOTOS, MESSAGES_COMMENTS, NAMES, informationData} from './initial-data.js';

// Функция для получения случайного описание картинки;
function getRandomDescription() {
  return DESCRIPTIONS_PHOTOS[(Math.floor(Math.random() * DESCRIPTIONS_PHOTOS.length))];
}

// Функция для получения случайного числа в диапазоне;
function getValueInRange (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Функция для получения лайков;
function getRandomLikes(min, max) {
  return getValueInRange(min, max);
}

// Функция для создания масиива комментариев
const getGenerateComments = function () {
  const comments = [];
  for (let i = 0; i < getValueInRange(informationData.commentsMin, informationData.commentsMax); i++) {
    const number = i + 1;
    comments.push({
      id: number,
      avatar: `img/avatar-${getValueInRange (informationData.imgAvatarMin, informationData.imgAvatarMax)}.svg`,
      message: getRandomMessage(),
      name: getRandomName()
    });
  }
  return comments;
};

// Ф-ция для получения случайного количества (ограничено длиной масиива) комментария(иев);
function getRandomMessage() {
  let message = '';
  // const lengthArray = MESSAGES_COMMENTS.length;
  for (let i = 1; i <= getValueInRange(informationData.messageMin, informationData.messageMax); i++) {
    message += MESSAGES_COMMENTS[(Math.floor(Math.random() * MESSAGES_COMMENTS.length))];
  }
  return message;
}

// Ф-ция для получения случайного имени;
function getRandomName() {
  return NAMES[(Math.floor(Math.random() * NAMES.length))];
}

export {getRandomDescription, getRandomLikes, getGenerateComments};

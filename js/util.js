import {DESCRIPTIONS_PHOTOS} from './initial-data.js';
import {MESSAGES_COMMENTS} from './initial-data.js';
import {NAMES} from './initial-data.js';
import {commentsMin} from './initial-data.js';
import {commentsMax} from './initial-data.js';
import {imgAvatarMin} from './initial-data.js';
import {imgAvatarMax} from './initial-data.js';
import {messageMin} from './initial-data.js';
import {messageMax} from './initial-data.js';

const generateIdArray = createIdGenerator();
const generateUrlPhotos = createIdGenerator();
const generateIdComments = createIdGenerator();

// Функция для создания адреса картинки - фото (строка);
function getRandomUrlPhotos() {
  return `photos/'${generateUrlPhotos()}.jpg`;
}

// Функция для получения случайного описание картинки;
function getRandomDescription() {
  return DESCRIPTIONS_PHOTOS[(Math.floor(Math.random() * DESCRIPTIONS_PHOTOS.length))];
}

// Функция для получения лайков;
function getRandomLikes(min, max) {
  return getValueInRange(min, max);
}

// Функция для создания масиива комментариев
const getGenerateComments = function () {
  const comments = [];
  for (let i = 0; i <= getValueInRange (commentsMin, commentsMax); i++) {
    comments.push({
      id: generateIdComments(),
      avatar: getRandomImgAvatar(),
      message: getRandomMessage(),
      name: getRandomName()
    });
  }
  return comments;
};

// Функция создает случайный адрес картинки - аватарки (строка);
function getRandomImgAvatar() {
  return `img/avatar-${getValueInRange (imgAvatarMin, imgAvatarMax)}.svg`; // случайное число от 1 до 6;
}

// Ф-ция для получения случайного количества (1 или 2) сообщений;
function getRandomMessage() {
  let message = '';
  const lengthArray = messageMax;
  for (let i = 0; i <= getValueInRange(messageMin, lengthArray); i++) {
    message += MESSAGES_COMMENTS[(Math.floor(Math.random() * MESSAGES_COMMENTS.length))];
  }
  return message;
}

// Ф-ция для получения случайного имени;
function getRandomName() {
  return NAMES[(Math.floor(Math.random() * NAMES.length))];
}

// Функция-генератор для получения уникальных идентификаторов
function createIdGenerator () {
  let lastGeneratedId = 0;
  return function () {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
}

// Функция для получения случайного числа в диапазоне;
function getValueInRange (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export {generateIdArray};
export {getRandomUrlPhotos};
export {getRandomDescription};
export {getRandomLikes};
export {getGenerateComments};

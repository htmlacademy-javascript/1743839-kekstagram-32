import {generateIdArray} from './util.js';
import {getRandomUrlPhotos} from './util.js';
import {getRandomDescription} from './util.js';
import {getRandomLikes} from './util.js';
import {getGenerateComments} from './util.js';
import {GENERATE_ARRAY} from './initial-data.js';
import {likesMin} from './initial-data.js';
import {likesMax} from './initial-data.js';

// Функция для создания массива из сгенерированных объектов
const getGenerateArray = function () {
  return {
    id: generateIdArray(),
    url: getRandomUrlPhotos(),
    description: getRandomDescription(),
    likes: getRandomLikes(likesMin, likesMax),
    comments: getGenerateComments()
  };
};

const generateArray = Array.from({length:GENERATE_ARRAY}, getGenerateArray);

export {generateArray};

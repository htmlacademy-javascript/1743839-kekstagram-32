import {getRandomDescription, getRandomLikes, getGenerateComments} from './util.js';
import {GENERATE_ARRAY, StatusCode} from './initial-data.js';

const getPictures = function () {
  const generateArray = [];
  for (let i = 0; i < GENERATE_ARRAY; i++) {
    const number = i + 1;
    generateArray.push({
      id: number,
      url: `photos/${number}.jpg`,
      description: getRandomDescription(),
      likes: getRandomLikes(StatusCode.likesMin, StatusCode.likesMax),
      comments: getGenerateComments()
    });
  }
  return generateArray;
};

export {getPictures};

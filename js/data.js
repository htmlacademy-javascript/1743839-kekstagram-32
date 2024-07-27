import {getRandomDescription, getRandomLikes, getGenerateComments} from './util.js';
import {StatusCode} from './initial-data.js';

const getGenerateArray = function (object) {
  const generateArray = [];
  for (let i = 0; i < object; i++) {
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

export {getGenerateArray};

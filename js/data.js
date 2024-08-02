import {getRandomDescription, getRandomLikes, getGenerateComments} from './util.js';
import {GENERATE_ARRAY, informationData} from './initial-data.js';

const getPictures = function () {
  const generateArray = [];
  for (let i = 0; i < GENERATE_ARRAY; i++) {
    const number = i + 1;
    generateArray.push({
      id: number,
      url: `photos/${number}.jpg`,
      description: getRandomDescription(),
      likes: getRandomLikes(informationData.likesMin, informationData.likesMax),
      comments: getGenerateComments()
    });
  }
  return generateArray;
};

export {getPictures};

const arroy = [];
const getGenerateArroy = function (quantity) {

  for (let i = 0; i <= quantity - 1; i++) {
    const object = {
      id: i + 1,
      likes: getRandomInRange(15, 200)
    };
    arroy.push(object);
    //console.log(array);
  }

  function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return arroy;
};

//console.log(array);

getGenerateArroy(3);
// console.log(result);

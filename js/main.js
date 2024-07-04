const array = [];
// Ф-ция для создания массива, quantity-параметр, необходимого количества объектов;
const getGenerateArray = function (quantity) {
for (let i = 0; i <= quantity - 1; i++) {
 const object = {
  id: getRandomId(i),
  url: getRandomPhotos(i),
  description: getRandomDescription(),
  likes: getRandomLikes(15, 200),
  comments: getRandomComments()
  };
  array.push(object);
}
return array;
};

// Ф-ция для получения случайного числа в диапазоне
function getValueInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Ф-ция для получения id (идентификатор опубликованной фотографии, число от 1 до 25. Идентификаторы не повторяются.)
function getRandomId(i) {
  return i+1;
};

// Ф-ция для получения url (адрес картинки);
function getRandomPhotos(i) {
  return 'photos/' + (i+1) + '.jpg';
};

// Ф-ция для получения description (случайная строка - описание фотографии);
function getRandomDescription() {
  const DESCRIPTIONS = ['интересная фотография','занимательная фотография','редкий снимок','я думаю, что на ней изображено?','давайте рассмотрим изображение внимательнее','передо мной шедевр','мне нравилась эта фотография','передает чувства и эмоции','создает настроение'];
  return DESCRIPTIONS[(Math.floor(Math.random() * DESCRIPTIONS.length))];
};

// Ф-ция для получения случайного количества лайков;
function getRandomLikes(min, max) {
  return getValueInRange(min, max);
};

// Ф-ция для создания массива comments;
function getRandomComments() {
let comments = [];
for (let j = 0; j < (getValueInRange(0,30)); j++) {
  let objectComments = {
    id: getRandomIdComments(j),
    avatar: getRandomAvatar(1,6),
    message: getRandomMessage(),
    name: getRandomName(),
    };
    comments.push(objectComments);
  };
  return comments;
};
// Ф-ция для получения id (идентификатор комментария. Идентификаторы не повторяются.)
function getRandomIdComments(j) {
 return j+101;
};

// Ф-ция для формирования поля avatar;
function getRandomAvatar(min, max) {
 return 'img/avatar-' + (getValueInRange(min, max)) + '.svg';
};

// Ф-ция для формирования поля message;
function getRandomMessage() {
  const MESSAGES = ['Всё отлично!','В целом всё неплохо. Но не всё.','Когда вы делаете фотографию, хорошо бы убирать палец из кадра.',
    'В конце концов это просто непрофессионально.','Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают.','Как можно было поймать такой неудачный момент?!'];
  let message = '';
  if (getValueInRange(1,2) === 1) {
    message = MESSAGES[(Math.floor(Math.random() * MESSAGES.length))];
  } else {
  message = MESSAGES[(Math.floor(Math.random() * MESSAGES.length))] + MESSAGES[(Math.floor(Math.random() * MESSAGES.length))];
  }
  return message;
};

// Ф-ция для получения случайного имени;
function getRandomName() {
  const NAMES = ['Софья','Анастасия','Виктория','Ксения', 'Арина','Елизавета','Аделина','Ирина','Елена','Полина', 'Дарья','Наталья',
    'Светлана','Вера','Надежда','Галина', 'Любовь','Александра','Мария','Анна','Ангелина', 'Марина','Екатерина','Людмила','Татьяна','Артём',
    'Александр', 'Роман', 'Евгений','Иван','Максим', 'Денис','Алексей','Дмитрий','Даниил','Сергей', 'Николай','Константин','Никита','Михаил',
    'Борис', 'Виктор','Геннадий','Вячеслав','Владимир','Андрей', 'Анатолий','Илья','Кирилл','Олег'];
  return NAMES[(Math.floor(Math.random() * NAMES.length))];
};

// Вызов ф-ции для получения массива из 25 объектов
getGenerateArray(25);

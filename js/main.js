// Массив описаний для картинок;
const DESCRIPTIONS_PHOTOS = [
  'интересная фотография',
  'занимательная фотография',
  'редкий снимок',
  'я думаю, что на ней изображено?',
  'давайте рассмотрим изображение внимательнее',
  'передо мной шедевр','мне нравилась эта фотография',
  'передает чувства и эмоции','создает настроение'
];

// Массив комментариев;
const MESSAGES_COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.',
  'В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают.',
  'Как можно было поймать такой неудачный момент?!'
];

// Массив имен;
const NAMES = [
  'Софья','Анастасия','Виктория','Ксения','Арина','Елизавета','Аделина','Ирина','Елена','Полина', 'Дарья','Наталья',
  'Светлана','Вера','Надежда','Галина', 'Любовь','Александра','Мария','Анна','Ангелина', 'Марина','Екатерина','Людмила','Татьяна',
  'Артём','Александр', 'Роман', 'Евгений','Иван','Максим', 'Денис','Алексей','Дмитрий','Даниил','Сергей', 'Николай',
  'Константин','Никита','Михаил','Борис', 'Виктор','Геннадий','Вячеслав','Владимир','Андрей', 'Анатолий','Илья','Кирилл','Олег'
];

const generateId = getRandomIdFromRange(1, 25); // число от 1 до 25;
const generateUrlPhotos = getRandomIdFromRange(1, 25); // число от 1 до 25;
const generateIdComments = getRandomIdFromRange(0, 30); // число от 0 до 30;
const generateImgAvatar = getRandomIdFromRange(1, 6); // число от 1 до 6;

const getGenerateArray = () => {
return {
  id: generateId(1, 3),
  url: getRandomUrlPhotos(),
  description: getRandomDescription(),
  likes: getRandomLikes(15, 200),
  comments: {
    id: generateIdComments(2, 4),
    avatar: getRandomImgAvatar(),
    message: getRandomMessage(),
    name: getRandomName()
  }
};
};

function getRandomIdFromRange (min, max) {
  const previousValues = [];
  return function () {
    let currentValue = getValueInRange (min, max);
    if (previousValues.length >= (max - min + 1)) {
      console.error('Перебраны все числа из диапазона от ' + min + ' до ' + max);
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getValueInRange (min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}

// Функция создает случайное число в диапазоне;
function getValueInRange (min, max) {
return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Функция создает случайный адрес картинки (строка);
function getRandomUrlPhotos() {
return 'photos/' + (generateUrlPhotos()) + '.jpg';
};

// Функция создает случайное описание картинки;
function getRandomDescription() {
return DESCRIPTIONS_PHOTOS[(Math.floor(Math.random() * DESCRIPTIONS_PHOTOS.length))];
};

function getRandomLikes(min, max) {
return getValueInRange(min, max);
};

function getRandomImgAvatar() {
return 'img/avatar-' + generateImgAvatar() + '.svg';
};

function getRandomMessage() {
let message = '';
if (getValueInRange(1,2) === 1) {
  message = MESSAGES_COMMENTS[(Math.floor(Math.random() * MESSAGES_COMMENTS.length))];
} else {
message = MESSAGES_COMMENTS[(Math.floor(Math.random() * MESSAGES_COMMENTS.length))] + MESSAGES_COMMENTS[(Math.floor(Math.random() *MESSAGES_COMMENTS.length))];
}
return message;
};

// Ф-ция для получения случайного имени;
function getRandomName() {
return NAMES[(Math.floor(Math.random() * NAMES.length))];
};

const generateArray = Array.from({length:25}, getGenerateArray);
console.log(generateArray);

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

  const GENERATE_ARRAY = 25; // количество сгенерированных объектов;
  const generateIdArray = createIdGenerator();
  const generateUrlPhotos = createIdGenerator();
  const generateIdComments = createIdGenerator();
  const generate_comments = getValueInRange(0, 30); // количество сгенерированных объектов  — случайное число от 0 до 30

  // Функция для создания массива из сгенерированных объектов
  const getGenerateArray = () => {
    return {
      id: generateIdArray(),
      url: getRandomUrlPhotos(),
      description: getRandomDescription(),
      likes: getRandomLikes(15, 200), // количество лайков, поставленных фотографии, случайное число от 15 до 200;
      comments: generateComment
    };
  };

  // Функция для создания адреса картинки - фото (строка);
  function getRandomUrlPhotos() {
  return 'photos/' + (generateUrlPhotos()) + '.jpg';
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
  const getGenerateComments = () => {
  return {
      id: generateIdComments(),
      avatar: getRandomImgAvatar(),
      message: getRandomMessage(),
      name: getRandomName()
    };
  };

  // Функция создает случайный адрес картинки - аватарки (строка);
  function getRandomImgAvatar() {
  return 'img/avatar-' + getValueInRange (1, 6) + '.svg'; // случайное число от 1 до 6;
  }

  // Ф-ция для получения случайного комментария(иев);
  function getRandomMessage() {
  let message = '';
  if (getValueInRange(1,2) === 1) {
    message = MESSAGES_COMMENTS[(Math.floor(Math.random() * MESSAGES_COMMENTS.length))];
  } else {
  message = MESSAGES_COMMENTS[(Math.floor(Math.random() * MESSAGES_COMMENTS.length))] + MESSAGES_COMMENTS[(Math.floor(Math.random() *MESSAGES_COMMENTS.length))];
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

  const generateComment = Array.from({length:generate_comments}, getGenerateComments);
  const generateArray = Array.from({length:GENERATE_ARRAY}, getGenerateArray);

  // Для проверки работы функции по созданию массива данных
  //console.log(generateArray);

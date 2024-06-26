// Функция для проверки длины строки;
const checkLengthToString = function (string, maxLength) {
  return string.length <= maxLength;
};

checkLengthToString('проверяемая строка', 20);
// checkLengthToString('проверяемая строка', 18);
// checkLengthToString('проверяемая строка', 10);

// Функция для проверки, является ли строка палиндромом;
const isPalindrome = function (string) {
  let changeString = string.replaceAll(' ', '');
  changeString = changeString.toLowerCase();

  let workString = '';
  for (let i = changeString.length - 1; i >= 0; i--) {
    workString = workString + changeString[i];
  }
  return changeString === workString;
};

isPalindrome('Лёша на полке клопа нашёл ');
// isPalindrome('ДовОд');
// isPalindrome('Кекс');

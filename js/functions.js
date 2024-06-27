// Функция для проверки длины строки;
const checkLengthToString = function (string, maxLength) {
  const lengthString = string.length;
  if (lengthString <= maxLength) {
    return true;
  } else {
    return false;
  }
};

checkLengthToString('проверяемая строка', 20);
// checkLengthToString('проверяемая строка', 18);
// checkLengthToString('проверяемая строка', 10);


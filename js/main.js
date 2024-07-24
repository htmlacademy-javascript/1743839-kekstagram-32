import {getGenerateArray} from './data.js';
import {GENERATE_ARRAY} from './initial-data.js';

Array.from({length:GENERATE_ARRAY}, getGenerateArray);

// Для проверки работы функции
// console.table(Array.from({length:GENERATE_ARRAY}, getGenerateArray));

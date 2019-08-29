import { TRIVIA_BOOLEAN_ANSWERS } from '../lib/constants';

const { TRUE, FALSE } = TRIVIA_BOOLEAN_ANSWERS;

function _shuffle(array) {
  array = [...array];
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

/**
 * Returns both the correct and incorrect answers, shuffled
 * @param {string} correct_answer
 * @param {string[]} incorrect_answers
 * @param {string} type
 * @returns {string[]}
 */
export function getAnswers({ correct_answer, incorrect_answers, type }) {
  if (type === 'boolean') {
    return [FALSE, TRUE];
  }

  return _shuffle([
    ...incorrect_answers,
    ...(correct_answer ? [correct_answer] : []),
  ]);
}

/**
 * Returns a string that is Capitalized
 * @example
 * Capitalize('bikes are rad');
 * // returns 'Bikes are rad'
 * @param {string} str
 * @returns {string}
 */
export function Capitalize(str) {
  return `${str[0].toUpperCase()}${str.slice(1)}`;
}

/**
 * Returns a string that is Title Cased
 * @example
 * Titlecase('downhill and cross country');
 * // returns 'Downhill and Cross Country'
 * @param {string} str
 * @returns {string}
 */
export function Titlecase(str) {
  const words = str.split(' ');
  const conjunctionsTest = /and|but|for|nor|or|so|yet/;
  return `${words
    .map(word => (conjunctionsTest.test(word) ? word : word.toUpperCase()))
    .join(' ')}`;
}

const sanitizeHTML = function(str) {
  const SCRIPT_REGEX = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;

  while (SCRIPT_REGEX.test(str)) {
    str = str.replace(SCRIPT_REGEX, '');
  }
  return str;
};

/**
 * Returns sanitized question text
 * @param {string} question
 * @returns {string}
 */
export function cleanText(question) {
  return sanitizeHTML(question);
}

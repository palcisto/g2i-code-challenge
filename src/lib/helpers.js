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

export function getAnswers({ correct_answer, incorrect_answers, type }) {
  if (type === 'boolean') {
    return [FALSE, TRUE];
  }

  return _shuffle([...incorrect_answers, correct_answer]);
}

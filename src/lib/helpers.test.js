import { Capitalize, cleanText, getAnswers } from './helpers';

it('Capitalize() should properly capitalizes text', () => {
  expect(Capitalize('bikes are rad')).toBe('Bikes are rad');
  expect(Capitalize('bikes are rad')).not.toBe('Bikes Are Rad');
});

it('cleanText() should remove <script> tags from strings', () => {
  const text = `Hello there <script>alert("you've been hacked!");</script> how are you?`;
  expect(cleanText(text)).toBe('Hello there  how are you?');
  expect(cleanText(text)).not.toBe(text);
});

it('getAnswers() should return an array of answers', () => {
  const params = {
    correct_answer: 'True',
    incorrect_answers: ['False'],
    type: 'boolean',
  };
  const answers = getAnswers(params);
  expect(answers.length).toBe(2);
  expect(answers).toContain('True');
  expect(answers).toContain('False');
});

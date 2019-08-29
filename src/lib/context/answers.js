import createGlobalState from './createGlobalState';

const { AnswersProvider, useAnswers } = createGlobalState({
  name: 'Answers',
  initialValue: [],
  customSetState(state, newValue, { shouldReset } = { shouldReset: false }) {
    return shouldReset ? [] : [...state, newValue];
  },
});

export { AnswersProvider, useAnswers };

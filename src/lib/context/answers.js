import createGlobalState from './createGlobalState';

const { AnswersProvider, useAnswers } = createGlobalState({
  name: 'Answers',
  initialValue: [],
  customSetState(state, newValue) {
    return [...state, newValue];
  },
});

export { AnswersProvider, useAnswers };

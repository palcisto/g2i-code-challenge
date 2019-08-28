import createGlobalState from './createGlobalState';

const { QuestionsProvider, useQuestions } = createGlobalState({
  name: 'Questions',
  initialValue: [],
});

export { QuestionsProvider, useQuestions };

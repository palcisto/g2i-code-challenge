import createGlobalState from './createGlobalState';

const { IsQuizCompleteProvider, useIsQuizComplete } = createGlobalState({
  name: 'IsQuizComplete',
  initialValue: false,
});

export { IsQuizCompleteProvider, useIsQuizComplete };

import React, { useEffect, useState } from 'react';
import { useTriviaSettings } from '../../lib/context/triviaSettings';
import ComposedPage from './ComposedPage';

function useAnswers(params) {
  return { answers: [], setAnswer() {} };
}

function useQuestions() {
  return { questions: [] };
}

function Quiz({ navigate, question: questionIndex }) {
  const [isLoading, setIsLoading] = useState();
  const { triviaCount } = useTriviaSettings();
  const { questions } = useQuestions();
  const { setAnswer } = useAnswers();
  questionIndex = parseInt(questionIndex);

  useEffect(() => {
    if (questions.length < triviaCount) {
      setIsLoading(true);
    }

    setIsLoading(false);
  }, [questions, triviaCount]);

  // Actions
  const onSelectAnswer = event => {
    console.log(
      'selectAnswer() event.currentTarget() /=>',
      event.currentTarget.dataset.answer
    );
    const answer = event.currentTarget.dataset.answer;
    setAnswer(answer);
    navigate(questionIndex + 1);
  };

  return (
    <ComposedPage
      isLoading={isLoading}
      onSelectAnswer={onSelectAnswer}
      progress={`${questionIndex + 1} of ${triviaCount}`}
      question={questions[questionIndex]}
    />
  );
}

export default Quiz;

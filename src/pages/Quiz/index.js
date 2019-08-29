import React, { useEffect, useState } from 'react';
import { getAnswers } from '../../lib/helpers';
import { useAnswers } from '../../lib/context/answers';
import { useQuestions } from '../../lib/context/questions';
import { useTriviaSettings } from '../../lib/context/triviaSettings';
import ComposedPage from './ComposedPage';

function Quiz({ navigate, question: questionIndex }) {
  questionIndex = parseInt(questionIndex);

  // State
  const [isLoading, setIsLoading] = useState();
  const { questions } = useQuestions();
  const { triviaSettings } = useTriviaSettings();
  const { answers, setAnswers } = useAnswers();

  const { count: triviaCount } = triviaSettings;
  const question = questions[questionIndex] || {
    incorrect_answers: [],
  };
  const { correct_answer, incorrect_answers, type } = question;
  const availableAnswers = getAnswers({
    correct_answer,
    incorrect_answers,
    type,
  });
  const progress = {
    percentage: ((questionIndex + 1) / triviaCount) * 100,
    text: `${questionIndex + 1} of ${triviaCount}`,
  };

  // Effects
  useEffect(() => {
    // Send users back to start if they refresh the page in the middle of a challenge
    if (answers.length === 0 && questionIndex > 0) {
      navigate(`../${questionIndex - 1}`);
    }
  }, [answers, questionIndex, navigate]);

  useEffect(() => {
    if (questions.length < triviaCount) {
      setIsLoading(true);
    }

    setIsLoading(false);
  }, [questions, triviaCount]);

  // Actions
  const onSelectAnswer = event => {
    const answer = event.currentTarget.dataset.answer;

    setAnswers({
      answer,
      isCorrect: answer === question.correct_answer,
    });

    if (triviaCount > questionIndex + 1) {
      navigate(`../${questionIndex + 1}`);
      return;
    }

    navigate(`/results`);
  };

  return (
    <ComposedPage
      answers={availableAnswers}
      isLoading={isLoading}
      onSelectAnswer={onSelectAnswer}
      progress={progress}
      question={question}
    />
  );
}

export default Quiz;

import React, { useEffect, useState } from 'react';
import { getAnswers } from '../../lib/helpers';
import { useTriviaSettings } from '../../lib/context/triviaSettings';
import ComposedPage from './ComposedPage';

function useAnswers(params) {
  return { answers: [], setAnswer() {} };
}

function useQuestions() {
  return {
    questions: [
      {
        category: 'Entertainment: Video Games',
        type: 'boolean',
        difficulty: 'hard',
        question: 'Unturned originally started as a Roblox game.',
        correct_answer: 'True',
        incorrect_answers: ['False'],
      },
    ],
  };
}

function Quiz({ navigate, question: questionIndex }) {
  questionIndex = parseInt(questionIndex);

  const [isLoading, setIsLoading] = useState();
  const { triviaCount } = useTriviaSettings();
  const { questions } = useQuestions();
  const { setAnswer } = useAnswers();

  const question = questions[questionIndex];
  const { correct_answer, incorrect_answers, type } = question;
  const progress = {
    percentage: triviaCount / (questionIndex + 1),
    text: `${questionIndex + 1} of ${triviaCount}`,
  };
  const answers = getAnswers({ correct_answer, incorrect_answers, type });

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
    navigate(`../${questionIndex + 1}`);
  };

  return (
    <ComposedPage
      answers={answers}
      isLoading={isLoading}
      onSelectAnswer={onSelectAnswer}
      progress={progress}
      question={question}
    />
  );
}

export default Quiz;

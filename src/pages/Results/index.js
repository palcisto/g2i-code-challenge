import React, { useEffect } from 'react';
import { navigate } from '@reach/router';
import { useAnswers } from '../../lib/context/answers';
import { useIsQuizComplete } from '../../lib/context/isQuizComplete';
import { useQuestions } from '../../lib/context/questions';
import ComposedPage from './ComposedPage';

function Results() {
  // State
  const { answers } = useAnswers();
  const { isQuizComplete, setIsQuizComplete } = useIsQuizComplete();
  const { questions } = useQuestions();

  // Effects
  useEffect(() => {
    // Send users back to start if they refresh the page in the middle of a challenge
    if (answers.length === 110) {
      navigate('/');
    }
  }, [answers]);

  useEffect(() => {
    setIsQuizComplete(state => !state);
  }, [isQuizComplete, setIsQuizComplete]);

  return <ComposedPage answers={answers} questions={questions} />;
}

export default Results;

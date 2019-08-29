import React, { useEffect } from 'react';
import { navigate } from '@reach/router';
import { useAnswers } from '../../lib/context/answers';
import { useQuestions } from '../../lib/context/questions';
import ComposedPage from './ComposedPage';

function Results() {
  // State
  const { answers } = useAnswers();
  const { questions } = useQuestions();

  // Effects
  useEffect(() => {
    if (answers.length === 0) {
      navigate('/');
    }
  }, [answers]);

  return <ComposedPage answers={answers} questions={questions} />;
}

export default Results;

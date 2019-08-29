import React from 'react';
import { array, bool, func, object } from 'prop-types';
import Answers from './Answers';
import QuestionCard from './QuestionCard';
import { StyledQuizPage } from './styles';
import { Loading } from '../../components/organisms';

ComposedPage.props = {
  answers: array.isRequired,
  isLoading: bool.isRequired,
  onSelectAnswer: func.isRequired,
  progress: object.isRequired,
  question: object.isRequired,
};

ComposedPage.defaultProps = {
  isLoading: false,
};

function ComposedPage({
  answers,
  isLoading,
  onSelectAnswer,
  progress,
  question,
}) {
  return (
    <StyledQuizPage title={question.category || ''}>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <QuestionCard question={question} progress={progress} />
          <Answers answers={answers} onSelectAnswer={onSelectAnswer} />
        </>
      )}
    </StyledQuizPage>
  );
}

export default ComposedPage;

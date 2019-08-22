import React from 'react';
import { bool, func, string, object } from 'prop-types';
import { QuestionCard, QuizProgress, StyledQuizPage } from './styles';
import { Button } from '../../components/atoms';
import { Loading } from '../../components/organisms';

ComposedPage.props = {
  isLoading: bool.isRequired,
  onSelectAnswer: func.isRequired,
  progress: string.isRequired,
  question: object.isRequired,
};

ComposedPage.defaultProps = {
  isLoading: false,
  progress: '',
  question: {
    category: 'Entertainment: Video Games',
    type: 'boolean',
    difficulty: 'hard',
    question: 'Unturned originally started as a Roblox game.',
    correct_answer: 'True',
    incorrect_answers: ['False'],
  },
};

function ComposedPage({ isLoading, onSelectAnswer, progress, question }) {
  return (
    <StyledQuizPage title={question.category}>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <QuestionCard difficulty={question.difficulty}>
            <p>{question.question}</p>
          </QuestionCard>
          <QuizProgress>{progress}</QuizProgress>
          <Button type="button" onClick={onSelectAnswer} data-answer="False">
            False
          </Button>
          <Button type="button" onClick={onSelectAnswer} data-answer="True">
            True
          </Button>
        </>
      )}
    </StyledQuizPage>
  );
}

export default ComposedPage;

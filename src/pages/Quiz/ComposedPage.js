import React from 'react';
import { array, bool, func, object } from 'prop-types';
import { Answers, QuestionCard, QuizProgress, StyledQuizPage } from './styles';
import { Button } from '../../components/atoms';
import { Loading } from '../../components/organisms';

ComposedPage.props = {
  answers: array.isRequired,
  isLoading: bool.isRequired,
  onSelectAnswer: func.isRequired,
  progress: object.isRequired,
  question: object.isRequired,
};

ComposedPage.defaultProps = {
  answers: ['True', 'False'],
  isLoading: false,
  progress: { percentage: 10, text: '' },
  question: {
    category: 'Entertainment: Video Games',
    type: 'boolean',
    difficulty: 'hard',
    question: 'Unturned originally started as a Roblox game.',
    correct_answer: 'True',
    incorrect_answers: ['False'],
  },
};

function ComposedPage({
  answers,
  isLoading,
  onSelectAnswer,
  progress,
  question,
}) {
  return (
    <StyledQuizPage title={question.category}>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <QuestionCard difficulty={question.difficulty}>
            <p>{question.question}</p>
            <QuizProgress progress={progress.percentage}>
              {progress.text}
            </QuizProgress>
          </QuestionCard>
          <Answers>
            {answers.map(answer => (
              <Button
                key={answer}
                type="button"
                onClick={onSelectAnswer}
                data-answer={answer}
              >
                {answer}
              </Button>
            ))}
          </Answers>
        </>
      )}
    </StyledQuizPage>
  );
}

export default ComposedPage;

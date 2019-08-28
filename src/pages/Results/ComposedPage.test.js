import React from 'react';
import { render } from '@testing-library/react';
import ComposedResultsPage from './ComposedPage';
import { answers } from '../../../test/mocks/answers';
import { questions } from '../../../test/mocks/questions';

it('renders composed results page', () => {
  const Container = () => {
    return <ComposedResultsPage answers={answers} questions={questions} />;
  };

  const { getByText, getAllByTestId, queryAllByTestId } = render(<Container />);
  const answerMarkers = getAllByTestId('answer-marker');
  const userAnswers = getAllByTestId('user-answer');
  expect(getByText('You scored 6 / 10')).toBeInTheDocument();
  expect(queryAllByTestId('answer-result').length).toBe(10);
  expect(answerMarkers[0]).toHaveClass('fas', 'fa-plus');
  expect(
    getByText('The Kingdom of Prussia briefly held land in Estonia.')
  ).toBeInTheDocument();
  expect(userAnswers[0]).toHaveTextContent('You answered: True');
});

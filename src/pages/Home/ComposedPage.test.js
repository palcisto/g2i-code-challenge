import React from 'react';
import { render } from '@testing-library/react';
import {
  TRIVIA_DEFAULT_COUNT,
  TRIVIA_DEFAULT_DIFFICULTY,
  TRIVIA_DEFAULT_TYPE,
  TRIVIA_TYPES,
} from '../../lib/constants';
import ComposedHomePage from './ComposedPage';

it('renders composed home page', () => {
  const useModal = () => ({ isModalOpen: false, toggleModal() {} });
  const useTriviaSettings = () => ({
    triviaSettings: {
      count: TRIVIA_DEFAULT_COUNT,
      difficulty: TRIVIA_DEFAULT_DIFFICULTY,
      type: TRIVIA_TYPES.find(type => type.value === TRIVIA_DEFAULT_TYPE),
    },
    setTriviaSettings() {},
  });

  const Container = () => {
    const { isModalOpen, toggleModal } = useModal();
    const { triviaSettings, setTriviaSettings } = useTriviaSettings();
    return (
      <ComposedHomePage
        isModalOpen={isModalOpen}
        onChangeTriviaSettings={setTriviaSettings}
        onToggleModal={toggleModal}
        triviaSettings={triviaSettings}
      />
    );
  };

  const { getByText } = render(<Container />);
  expect(getByText('Welcome to the Trivia Challenge!')).toBeInTheDocument();
  expect(
    getByText('You will be presented with 10 True or False questions.')
  ).toBeInTheDocument();
  expect(getByText('Can you score 100%?')).toBeInTheDocument();
});

import React from 'react';
import { useTriviaSettings } from '../../lib/context/triviaSettings';
import { useModal } from '../../lib/hooks';
import ComposedPage from './ComposedPage';

function Home() {
  const { isModalOpen, toggleModal } = useModal();
  const triviaSettings = useTriviaSettings();

  return (
    <ComposedPage
      isModalOpen={isModalOpen}
      toggleModal={toggleModal}
      triviaSettings={triviaSettings}
    />
  );
}

export default Home;

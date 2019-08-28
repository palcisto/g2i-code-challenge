import React, { useEffect } from 'react';
import { useIsQuizComplete } from '../../lib/context/isQuizComplete';
import { useTriviaSettings } from '../../lib/context/triviaSettings';
import { useModal } from '../../lib/hooks';
import ComposedPage from './ComposedPage';

function Home() {
  const { isQuizComplete, setIsQuizComplete } = useIsQuizComplete();
  const { isModalOpen, toggleModal } = useModal();
  const { triviaSettings, setTriviaSettings } = useTriviaSettings();

  useEffect(() => {
    setIsQuizComplete(isQuizComplete => {
      console.log('[Home] isQuizComplete:', isQuizComplete);
      if (isQuizComplete) {
        return !isQuizComplete;
      }
    });
  }, [isQuizComplete, setIsQuizComplete]);

  return (
    <ComposedPage
      isModalOpen={isModalOpen}
      onChangeTriviaSettings={setTriviaSettings}
      onToggleModal={toggleModal}
      triviaSettings={triviaSettings}
    />
  );
}

export default Home;

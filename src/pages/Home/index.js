import React, { useEffect } from 'react';
import { useAnswers } from '../../lib/context/answers';
import { useTriviaSettings } from '../../lib/context/triviaSettings';
import { useModal } from '../../lib/hooks';
import ComposedPage from './ComposedPage';

function Home() {
  // State
  const { answers, setAnswers } = useAnswers();
  const { isModalOpen, toggleModal } = useModal();
  const { triviaSettings, setTriviaSettings } = useTriviaSettings();

  // Effects
  useEffect(() => {
    if (answers.length > 0) {
      setAnswers(null, { shouldReset: true });
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

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

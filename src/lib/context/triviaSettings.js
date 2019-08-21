import React, { createContext, useContext, useState } from 'react';
import {
  TRIVIA_DEFAULT_COUNT,
  TRIVIA_DEFAULT_DIFFICULTY,
  TRIVIA_DEFAULT_TYPE,
  TRIVIA_TYPES,
} from '../constants';

const TriviaSettingsContext = createContext();

function useTriviaSettings() {
  const context = useContext(TriviaSettingsContext);
  if (!context) {
    throw new Error(
      `useTriviaSettings must be used within a TriviaSettingsProvider`
    );
  }
  return context;
}

function TriviaSettingsProvider(props) {
  const defaultTriviaType = TRIVIA_TYPES.find(
    type => type.value === TRIVIA_DEFAULT_TYPE
  );
  const [triviaCount, setTriviaCount] = useState(TRIVIA_DEFAULT_COUNT);
  const [triviaDifficulty, setTriviaDifficulty] = useState(
    TRIVIA_DEFAULT_DIFFICULTY
  );
  const [triviaType, _setTriviaType] = useState(defaultTriviaType);

  function setTriviaType(selectedValue) {
    const selectedType = TRIVIA_TYPES.find(
      type => type.value === selectedValue
    );
    _setTriviaType(selectedType);
  }

  const value = React.useMemo(
    () => ({
      triviaCount,
      triviaDifficulty,
      triviaType,
      setTriviaCount,
      setTriviaDifficulty,
      setTriviaType,
    }),
    [triviaCount, triviaDifficulty, triviaType]
  );
  return <TriviaSettingsContext.Provider value={value} {...props} />;
}

export { TriviaSettingsProvider, useTriviaSettings };

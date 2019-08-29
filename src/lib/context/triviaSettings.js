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
  const [triviaSettings, _setTriviaSettings] = useState({
    count: TRIVIA_DEFAULT_COUNT,
    difficulty: TRIVIA_DEFAULT_DIFFICULTY,
    type: defaultTriviaType,
  });

  function setTriviaSettings({ count, difficulty, type: selectedType }) {
    _setTriviaSettings(current => {
      const type = TRIVIA_TYPES.find(_type => _type.value === selectedType);

      return {
        ...current,
        ...(type && { type }),
        ...(count && { count }),
        ...(difficulty && { difficulty }),
      };
    });
  }

  const value = React.useMemo(
    () => ({
      triviaSettings,
      setTriviaSettings,
    }),
    [triviaSettings]
  );
  return <TriviaSettingsContext.Provider value={value} {...props} />;
}

export { TriviaSettingsProvider, useTriviaSettings };

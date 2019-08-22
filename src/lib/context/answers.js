import React, { createContext, useContext, useState } from 'react';

const AnswersContext = createContext();

function useAnswers() {
  const context = useContext(AnswersContext);

  if (!context) {
    throw new Error(`useAnswers must be used within a AnswersProvider`);
  }
  return context;
}

function AnswersProvider(props) {
  const [answers, setAnswers] = useState([]);

  const value = React.useMemo(
    () => ({
      answers,
      setAnswers,
    }),
    [answers]
  );
  return <AnswersContext.Provider value={value} {...props} />;
}

export { AnswersProvider, useAnswers };

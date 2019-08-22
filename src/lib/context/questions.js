import React, { createContext, useContext, useState } from 'react';

const QuestionsContext = createContext();

function useQuestions() {
  const context = useContext(QuestionsContext);

  if (!context) {
    throw new Error(`useQuestions must be used within a QuestionsProvider`);
  }
  return context;
}

function QuestionsProvider(props) {
  const [questions, setQuestions] = useState([]);

  const value = React.useMemo(
    () => ({
      questions,
      setQuestions,
    }),
    [questions]
  );
  return <QuestionsContext.Provider value={value} {...props} />;
}

export { QuestionsProvider, useQuestions };

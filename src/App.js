import React, { useEffect } from 'react';
import { Router } from '@reach/router';
import { Helmet } from 'react-helmet';
import { fetchQuestions } from './lib/getData';
import { APP_TITLE } from './lib/constants';
import { useIsQuizComplete } from './lib/context/isQuizComplete';
import { useTriviaSettings } from './lib/context/triviaSettings';
import { useQuestions } from './lib/context/questions';
import { ContextProviders } from './Providers';
import { Home, Quiz, Results } from './pages';

// Global State
// questions - need on quiz and results views
//   Use context and hooks to store questions in global state for quiz and
//   results views to access via context
// answers - need on quiz and results views
//   Use context and hooks to set and store answers in global state for quiz and
//   results views to access via context

// count -
// difficulty -
// type -

// Quiz state
// isLoading - bool
// currentQuestion - zero based integer
// In useEffect check length of questions and set isLoading

function DataLoader({ children }) {
  const { setQuestions } = useQuestions();
  const { isQuizComplete } = useIsQuizComplete();
  const { triviaSettings } = useTriviaSettings();

  useEffect(() => {
    (async () => {
      console.log('isQuizComplete:', isQuizComplete);
      const { count, difficulty, type } = triviaSettings;
      const data = await fetchQuestions({
        count,
        difficulty,
        type: type.value,
      });
      console.log('questions:', data.questions);

      setQuestions(data.questions);
    })();
  }, [triviaSettings, setQuestions, isQuizComplete]);

  return children;
}

function App() {
  return (
    <ContextProviders>
      <DataLoader>
        <Helmet>
          <link
            href="https://fonts.googleapis.com/css?family=Play:400,700&display=swap"
            rel="stylesheet"
          />
          <title>{APP_TITLE}</title>
        </Helmet>

        <Router>
          <Home path="/" />
          <Quiz path="quiz/:question" />
          <Results path="results" />
        </Router>
        <div id="modal-root" />
      </DataLoader>
    </ContextProviders>
  );
}

export default App;

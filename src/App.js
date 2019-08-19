import React from 'react';
import { Router } from '@reach/router';
import { Home, Quiz, Results } from './pages';

function App() {
  return (
    <Router>
      <Home path="/" />
      <Quiz path="quiz" />
      <Results path="results" />
    </Router>
  );
}

export default App;

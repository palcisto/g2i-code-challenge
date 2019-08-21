import React from 'react';
import { Router } from '@reach/router';
import { Helmet } from 'react-helmet';
import { APP_TITLE } from './lib/constants';
import { ContextProviders } from './Providers';
import { Home, Quiz, Results } from './pages';

// Global State
// answers - need on quiz and results views
// count -
// difficulty -
// type -

function App() {
  return (
    <ContextProviders>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Play:400,700&display=swap"
          rel="stylesheet"
        />
        <title>{APP_TITLE}</title>
      </Helmet>

      <Router>
        <Home path="/" />
        <Quiz path="quiz" />
        <Results path="results" />
      </Router>
      <div id="modal-root" />
    </ContextProviders>
  );
}

export default App;

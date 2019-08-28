import React from 'react';
import { Router } from '@reach/router';
import { Helmet } from 'react-helmet';
import { APP_TITLE } from './lib/constants';
import DataLoader from './DataLoader';
import { ContextProviders } from './Providers';
import { Home, Quiz, Results } from './pages';

function App() {
  return (
    <ContextProviders>
      <DataLoader>
        <Helmet>
          <link
            href="https://fonts.googleapis.com/css?family=Play:400,700&display=swap"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
            integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
            crossorigin="anonymous"
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

import React from 'react';
import { StyledQuizPage } from './styles';

ComposedPage.props = {};

function ComposedPage() {
  return (
    <StyledQuizPage>
      <h1>Entertainment: Video Games</h1>
      <p>Unturned originally started as a Roblox game.</p>
      <span>1 of 10</span>
      <button type="button">False</button>
      <button type="button">True</button>
    </StyledQuizPage>
  );
}

export default ComposedPage;

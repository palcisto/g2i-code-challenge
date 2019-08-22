import React from 'react';
import { footerHeight } from '../../components/style-variables';
import { StyledResultsPage } from './styles';
import { LinkButton } from '../../components/atoms';
import { List } from '../../components/molecules';

ComposedPage.props = {};

function ComposedPage() {
  return (
    <StyledResultsPage
      title={`You scored 3 / 10`}
      footer={
        <LinkButton height={footerHeight} to="/">
          Play again?
        </LinkButton>
      }
    >
      <List isOrdered={true}>
        <li>Question 1</li>
        <li>Question 2</li>
        <li>Question 3</li>
        <li>Question 4</li>
        <li>Question 5</li>
        <li>Question 6</li>
        <li>Question 7</li>
        <li>Question 8</li>
        <li>Question 9</li>
        <li>Question 10</li>
      </List>
    </StyledResultsPage>
  );
}

export default ComposedPage;

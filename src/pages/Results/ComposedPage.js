import React from 'react';
import { array } from 'prop-types';
import { cleanQuestion } from '../../lib/helpers';
import { footerHeight } from '../../components/style-variables';
import { StyledResultsPage } from './styles';
import { LinkButton } from '../../components/atoms';
import { List } from '../../components/molecules';

ComposedPage.props = {
  answers: array.isRequired,
  questions: array.isRequired,
};

function ComposedPage({ answers, questions }) {
  console.log('answers:', answers);
  const score = answers.filter(
    (answer, i) => answer === questions[i].correct_answer
  ).length;
  return (
    <StyledResultsPage
      title={`You scored ${score} / ${questions.length}`}
      footer={
        <LinkButton height={footerHeight} to="/">
          Play again?
        </LinkButton>
      }
    >
      <List isOrdered={true}>
        {questions.map(({ question }, i) => {
          return (
            <li key={i}>
              <p
                dangerouslySetInnerHTML={{ __html: cleanQuestion(question) }}
              ></p>
            </li>
          );
        })}
      </List>
    </StyledResultsPage>
  );
}

export default ComposedPage;

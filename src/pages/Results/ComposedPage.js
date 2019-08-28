import React from 'react';
import { array } from 'prop-types';
import { cleanText } from '../../lib/helpers';
import { footerHeight } from '../../components/style-variables';
import {
  StyledAnswer,
  StyledAnswerMark,
  StyledResponse,
  StyledResultsPage,
} from './styles';
import { LinkButton } from '../../components/atoms';
import { List } from '../../components/molecules';

ComposedPage.props = {
  answers: array.isRequired,
  questions: array.isRequired,
};

const ANSWER_ICONS = {
  correct: 'fa-plus',
  wrong: 'fa-minus',
};

function ComposedPage({ answers, questions }) {
  const score = answers.filter((answer, i) => answer.isCorrect).length;
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
        {questions.map(({ correct_answer, question }, i) => {
          const answer = answers[i] || {};
          const answerCorrectness = answer.isCorrect ? 'correct' : 'wrong';
          const classNames = `fas ${ANSWER_ICONS[answerCorrectness]}`;
          return (
            <StyledAnswer key={i}>
              <StyledAnswerMark
                answer={answerCorrectness}
                className={classNames}
              />
              <p dangerouslySetInnerHTML={{ __html: cleanText(question) }}></p>
              <StyledResponse>
                You answered: <span>{answer.answer}</span>
              </StyledResponse>
            </StyledAnswer>
          );
        })}
      </List>
    </StyledResultsPage>
  );
}

export default ComposedPage;

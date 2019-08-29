import React from 'react';
import { object } from 'prop-types';
import { cleanText } from '../../lib/helpers';
import { StyledQuizProgress, StyledQuestionCard } from './styles';

QuestionCard.propTypes = {
  progress: object.isRequired,
  question: object.isRequired,
};

function QuestionCard({
  progress: { percentage, text },
  question: { difficulty, question },
}) {
  // Due to React escpaing all strings to protext against XSS attacks, we have to
  // sanitize the question's text and `dangerouslySetInnerHTML` because they may contain
  // HTML entities that otherwise would not be rendered correctly.
  return (
    <StyledQuestionCard difficulty={difficulty}>
      <p dangerouslySetInnerHTML={{ __html: cleanText(question) }}></p>
      <StyledQuizProgress progress={percentage}>
        <span>{text}</span>
      </StyledQuizProgress>
    </StyledQuestionCard>
  );
}

export default QuestionCard;

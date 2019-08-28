import React from 'react';
import { object } from 'prop-types';
import { cleanQuestion } from '../../lib/helpers';
import { StyledQuizProgress, StyledQuestionCard } from './styles';

QuestionCard.propTypes = {
  progress: object.isRequired,
  question: object.isRequired,
};

function QuestionCard({
  progress: { percentage, text },
  question: { difficulty, question },
}) {
  const questionText = cleanQuestion(question);
  return (
    <StyledQuestionCard difficulty={difficulty}>
      <p dangerouslySetInnerHTML={{ __html: questionText }}></p>
      <StyledQuizProgress progress={percentage}>
        <span>{text}</span>
      </StyledQuizProgress>
    </StyledQuestionCard>
  );
}

export default QuestionCard;

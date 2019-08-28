import React from 'react';
import { array, func } from 'prop-types';
import { cleanText } from '../../lib/helpers';
import { Button } from '../../components/atoms';
import { StyledAnswers } from './styles';

Answers.propTypes = {
  answers: array.isRequired,
  onSelectAnswer: func.isRequired,
};

function Answers({ answers, onSelectAnswer }) {
  return (
    <StyledAnswers>
      {answers.map(answer => (
        <Button
          key={answer}
          type="button"
          onClick={onSelectAnswer}
          data-answer={answer}
          dangerouslySetInnerHTML={{ __html: cleanText(answer) }}
        ></Button>
      ))}
    </StyledAnswers>
  );
}

export default Answers;

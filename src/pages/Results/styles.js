import styled from 'styled-components/macro';
import { rem } from 'polished';
import { getColor } from '../../components/style-functions';
import { baseFontSize, baseSpacing } from '../../components/style-variables';
import { Page } from '../../components/templates';

const ANSWER_COLORS = {
  correct: getColor('green'),
  wrong: getColor('red'),
};

export const StyledResultsPage = styled(Page)`
  ol {
    text-align: left;
  }
`;

export const StyledAnswerMark = styled.i`
  color: ${({ answer }) => ANSWER_COLORS[answer]};
  font-size: ${rem(baseFontSize * 2)};
`;

export const StyledResponse = styled.p`
  color: ${getColor('blue')};

  span {
    color: ${getColor('black')};
  }
`;

export const StyledAnswer = styled.li`
  line-height: 2;
  padding-left: ${rem(baseFontSize * 2 + baseSpacing * 3)};
  position: relative;

  &::before {
    position: absolute;
  }

  ${StyledAnswerMark} {
    left: 0;
    position: absolute;
    top: 0;
  }

  p {
    margin: 0;
  }
`;

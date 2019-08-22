import styled from 'styled-components/macro';
import { rem } from 'polished';
import { getColor } from '../../components/style-functions';
import { baseFontSize, baseSpacing } from '../../components/style-variables';
import { Page } from '../../components/templates';

const shadow = `${getColor('black', 'quarterOpaque')}`;

export const StyledQuizPage = styled(Page)`
  main {
    display: flex;
    flex-flow: column;
    padding-top: ${rem(`${baseSpacing * 15}px`)};
  }
`;

export const Answers = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: ${baseSpacing}px ${baseSpacing}px;
`;

export const QuestionCard = styled.div`
  align-items: center;
  box-shadow: 0 5px 30px ${shadow};
  display: flex;
  height: calc(100vw - ${baseSpacing * 8}px);
  margin-bottom: ${rem(`${baseSpacing * 10}px`)};
  padding: ${rem(`${baseSpacing * 4}px`)};
  position: relative;

  p:first-of-type {
    font-size: ${rem(`${baseFontSize * 1.5}px`)};
  }

  @media screen and (min-width: 500px) {
    height: calc(500px - ${baseSpacing * 8}px);
  }
`;

export const QuizProgress = styled.p`
  bottom: 0;
  font-size: ${rem(`${baseFontSize}px`)};
  height: ${rem('20px')};
  left: 0;
  margin: 0;
  position: absolute;
  right: 0;

  &::before {
    background-color: ${getColor('primary')};
    content: '';
    display: block;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: ${({ progress }) => (progress ? progress : 0)}%;
  }
`;

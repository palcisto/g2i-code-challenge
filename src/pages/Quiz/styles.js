import styled from 'styled-components/macro';
import { rem } from 'polished';
import { getColor } from '../../components/style-functions';
import { baseFontSize, baseSpacing } from '../../components/style-variables';
import { Page } from '../../components/templates';

const DIFFICULTIES = {
  easy: {
    background: getColor('green'),
    foreground: getColor('white'),
  },
  medium: {
    background: getColor('yellow'),
    foreground: getColor('black'),
  },
  hard: {
    background: getColor('red'),
    foreground: getColor('white'),
  },
};
const shadow = `${getColor('black', 'quarterOpaque')}`;

function createSetColor(ground) {
  return ({ difficulty }) => {
    const _difficulty = DIFFICULTIES[difficulty] || {};
    return _difficulty[ground];
  };
}

export const StyledQuizPage = styled(Page)`
  main {
    align-items: stretch;
    display: flex;
    flex-flow: column;
    padding-top: ${rem(`${baseSpacing * 15}px`)};
  }
`;

export const StyledAnswers = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: ${baseSpacing}px ${baseSpacing}px;
`;

export const StyledQuestionCard = styled.div`
  align-items: center;
  box-shadow: 0 5px 30px ${shadow};
  display: flex;
  justify-content: center;
  height: calc(100vw - ${baseSpacing * 8}px);
  margin-bottom: ${rem(`${baseSpacing * 10}px`)};
  padding: ${rem(`${baseSpacing * 4}px`)};
  position: relative;
  text-align: center;
  width: 100%;

  &::before {
    background-color: ${createSetColor('background')};
    color: ${createSetColor('foreground')};
    content: '${({ difficulty }) => difficulty}';
    display: block;
    font-size: ${rem(baseFontSize * 0.75)};
    line-height: 1.5;
    padding: 0 ${rem(baseSpacing * 4)};
    position: absolute;
    right: 0;
    top: 10px;
    text-transform: uppercase;
  }

  p:first-of-type {
    font-size: ${rem(`${baseFontSize * 1.5}px`)};
  }

  @media screen and (min-width: 500px) {
    height: calc(500px - ${baseSpacing * 8}px);
  }
`;

export const StyledQuizProgress = styled.p`
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
    z-index: 0;
  }

  span {
    position: relative;
    z-index: 10;
  }
`;

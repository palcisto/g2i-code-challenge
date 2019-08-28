import styled from 'styled-components';
import { rem } from 'polished';
import { getColor } from '../../style-functions';
import {
  baseFontSize,
  baseButtonHeight,
  baseSpacing,
} from '../../style-variables';

const SIZE_STATES = {
  small: {
    fontSize: rem(baseFontSize * 1.1),
    height: rem('30px'),
  },
  medium: {
    fontSize: rem(baseFontSize * 1.5),
    height: baseButtonHeight,
  },
};

const Button = styled.button`
  background-color: ${getColor('primary')};
  border: 0;
  color: ${getColor('white')};
  display: inline-block;
  font-size: ${({ size }) => SIZE_STATES[size].fontSize};
  line-height: ${({ height, size }) =>
    height ? height : SIZE_STATES[size].height};
  padding: 0 ${rem(baseSpacing * 4)};
  text-align: center;

  &:hover {
    background-color: ${getColor('orange', 'dark')};
  }
`;

Button.defaultProps = {
  size: 'medium',
};

export default Button;

import styled from 'styled-components';
import { rem } from 'polished';
import { getColor } from '../../style-functions';
import {
  baseFontSize,
  baseButtonHeight,
  baseSpacing,
} from '../../style-variables';

const Button = styled.button`
  background-color: ${getColor('primary')};
  border: 0;
  color: ${getColor('white')};
  display: inline-block;
  font-size: ${rem(`${baseFontSize * 1.5}px`)};
  line-height: ${({ height }) => (height ? height : baseButtonHeight)};
  padding: 0 ${baseSpacing * 4}px;
  text-align: center;

  &:hover {
    background-color: ${getColor('orange', 'dark')};
  }
`;

export default Button;

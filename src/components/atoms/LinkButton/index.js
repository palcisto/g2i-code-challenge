import { Link } from '@reach/router';
import { rem } from 'polished';
import styled from 'styled-components';
import { getColor } from '../../style-functions';
import {
  baseFontSize,
  baseButtonHeight,
  baseSpacing,
} from '../../style-variables';

const LinkButton = styled(Link)`
  background-color: ${getColor('primary')};
  color: ${getColor('white')};
  display: block;
  font-size: ${rem(`${baseFontSize * 1.5}px`)};
  height: ${({ height }) => (height ? height : baseButtonHeight)};
  line-height: ${({ height }) => (height ? height : baseButtonHeight)};
  padding: 0 ${baseSpacing * 2}px;
  text-align: center;
  text-decoration: none;

  &:hover {
    background-color: ${getColor('orange', 'dark')};
    cursor: pointer;
    text-decoration: underline;
  }
`;

export default LinkButton;

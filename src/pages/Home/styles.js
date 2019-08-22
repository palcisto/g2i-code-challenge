import styled from 'styled-components/macro';
import { rem } from 'polished';
import { IconButton } from '../../components/atoms';
import { Page } from '../../components/templates';
import { getColor } from '../../components/style-functions';
import { baseFontSize, baseSpacing } from '../../components/style-variables';

export const SettingsButton = styled(IconButton)`
  position: absolute;
  right: ${baseSpacing * 2}px;
  top: ${baseSpacing * 2}px;

  svg {
    height: 24px;
    fill: ${getColor('grey', 'dark')};
  }
`;

export const StyledHomePage = styled(Page)`
  background: linear-gradient(
    0deg,
    rgba(9, 9, 121, 1) 0%,
    rgba(0, 212, 255, 1) 100%
  );
  color: #fff;

  main {
    display: flex;
    flex-flow: column;
    justify-content: space-around;
    padding-top: ${rem(`${baseSpacing * 20}px`)};
  }

  p {
    font-size: ${rem(`${baseFontSize * 1.5}px`)};
  }
`;

import styled from 'styled-components/macro';
import { rem } from 'polished';
import { IconButton } from '../../components/atoms';
import { Page } from '../../components/templates';
import { getColor } from '../../components/style-functions';
import { baseFontSize, baseSpacing } from '../../components/style-variables';

export const SettingsButton = styled(IconButton)`
  position: absolute;
  right: ${rem(baseSpacing * 2)};
  top: ${rem(baseSpacing * 2)};

  svg {
    height: ${rem(24)};
    fill: ${getColor('grey', 'dark')};
  }
`;

export const StyledHomePage = styled(Page)`
  main {
    display: flex;
    flex-flow: column;
    justify-content: space-around;
    padding-top: ${rem(baseSpacing * 20)};
  }

  p {
    font-size: ${rem(baseFontSize * 1.5)};
  }
`;

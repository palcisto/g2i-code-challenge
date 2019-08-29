import styled from 'styled-components';
import { rem } from 'polished';
import { appWidth, baseSpacing } from '../../style-variables';

const Main = styled.main`
  padding: 0 ${rem(baseSpacing * 4)};
  max-width: ${appWidth};
  width: 100%;
`;

export default Main;

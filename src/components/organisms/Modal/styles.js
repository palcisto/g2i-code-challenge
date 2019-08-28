import styled from 'styled-components/macro';
import { rem } from 'polished';
import { appWidth, baseFontSize, baseSpacing } from '../../style-variables';

export const StyledModal = styled.div`
  background-color: #fff;
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 100;

  .modal-container {
    padding: ${rem(baseSpacing * 5)};
    position: relative;
    width: ${appWidth};
  }

  h1 {
    font-size: ${rem(baseFontSize * 2)};
    font-weight: normal;
  }
`;

export const StyledCloseButton = styled.button`
  background: transparent;
  border: 0;
  right: ${rem(20)};
  position: absolute;
  top: ${rem(20)};

  .fa-times {
    font-size: ${rem(baseFontSize * 2)};
  }
`;

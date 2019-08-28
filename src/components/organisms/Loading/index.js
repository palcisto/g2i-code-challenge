import React from 'react';
import styled from 'styled-components/macro';
import { rem } from 'polished';
import { getColor } from '../../style-functions';
import { baseFontSize } from '../../style-variables';

const StyledLoading = styled.div`
  align-items: center;
  background-color: ${getColor('white')};
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 100;

  h1 {
    font-size: ${rem(baseFontSize * 2)};
    font-weight: 400;
  }
`;

function Loading() {
  return (
    <StyledLoading>
      <h1>Loading...</h1>
    </StyledLoading>
  );
}

export default Loading;

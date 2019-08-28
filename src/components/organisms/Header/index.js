import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { rem } from 'polished';
import { baseFontSize, baseSpacing } from '../../style-variables';

const StyledHeader = styled.header`
  padding-top: 1px; /* prevent content margin top from creating a gap at top of page */
  position: relative;

  h1 {
    font-size: ${rem(baseFontSize * 2)};
    margin: ${rem(baseSpacing * 14)} 0 0;
  }
`;

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

function Header({ children, title }) {
  return (
    <StyledHeader>
      <h1>{title}</h1>
      {children}
    </StyledHeader>
  );
}

export default Header;

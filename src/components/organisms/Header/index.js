import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledHeader = styled.header`
  padding-top: 1px; /* prevent content margin top from creating a gap at top of page */
  position: relative;

  h1 {
    font-size: 2rem;
    margin: 70px 0 0;
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

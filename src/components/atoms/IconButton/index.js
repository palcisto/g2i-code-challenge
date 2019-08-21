import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

IconButton.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.array]).isRequired,
};

const StyledIconButton = styled.button`
  background-color: transparent;
  border: 0;
`;

function IconButton({ children, ...props }) {
  return (
    <StyledIconButton type="button" {...props}>
      {children}
    </StyledIconButton>
  );
}

export default IconButton;

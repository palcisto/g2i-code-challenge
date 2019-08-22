import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

List.defaultProps = {
  isBulletList: false,
};

List.propTypes = {
  isBulletList: PropTypes.bool,
};

const styles = `
  margin: 0 0 25px;
  padding-left: 0;

  li {
    margin-bottom: 10px;
  }

  /* Accessibility fix: https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-type#Accessibility_concerns */
  li::before {
    content: '\\200B';
  }
`;
const StyledUl = styled.ul`
  ${styles}
  list-style-type: ${props => (props.hasMarkers ? 'disc' : 'none')};
`;
const StyledOl = styled.ol`
  ${styles}
  list-style-type: ${props => (props.hasMarkers ? 'decimal' : 'none')};
`;

List.defaultProps = {
  hasMarkers: false,
  isOrdered: false,
};

function List({ children, hasMarkers, isOrdered, ...rest }) {
  const StyledList = isOrdered ? StyledOl : StyledUl;
  return (
    <StyledList hasMarkers={hasMarkers} {...rest}>
      {children}
    </StyledList>
  );
}

export default List;

import React from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledModal = styled.div`
  background-color: #fff;
  bottom: 0;
  left: 0;
  padding: 25px;
  position: absolute;
  right: 0;
  top: 0;

  h1 {
    font-size: 2rem;
    font-weight: normal;
  }

  .close {
    right: 20px;
    position: absolute;
    top: 20px;
  }
`;

Modal.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node),
  onClose: PropTypes.func.isRequired,
};

function Modal({ children, onClose, ...props }) {
  return createPortal(
    <StyledModal>
      {children}
      <button className="close" type="button" onClick={onClose}>
        Close
      </button>
    </StyledModal>,
    document.getElementById('modal-root')
  );
}

export default Modal;

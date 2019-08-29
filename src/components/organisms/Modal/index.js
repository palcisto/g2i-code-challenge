import React from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { StyledCloseButton, StyledModal } from './styles';

Modal.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node),
  onClose: PropTypes.func.isRequired,
};

function Modal({ children, onClose }) {
  return createPortal(
    <StyledModal>
      <div className="modal-container">
        {children}
        <StyledCloseButton className="close" type="button" onClick={onClose}>
          <i className="fa fa-times"></i>
          <span className="visually-hidden">Close</span>
        </StyledCloseButton>
      </div>
    </StyledModal>,
    document.getElementById('modal-root')
  );
}

export default Modal;

/* eslint-disable react/prop-types */
import React from 'react';
import './modal.scss';

const Modal = ({
  backDropStyle, isModalOpen, style, closeModal, children,
}) => (
  <div>
      <div
        id="backdrop"
        style={backDropStyle}
        onClick={() => (isModalOpen ? closeModal() : null)}
        className={`backdrop ${isModalOpen ? 'active' : ''}`}
      />
      <div
        style={style}
        className={`${'modal-wrapper '}${isModalOpen ? 'active' : ''}`}
      >
        {children}
      </div>
    </div>
);

export default Modal;

import React, { useState, useRef } from 'react';

const Modal = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef();

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const onClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      closeModal();
    }
  };

  return (
    <div>
      <button onClick={openModal} className="btn">Open Modal</button>
      {isOpen && (
        <div className="modal-overlay" onClick={onClickOutside}>
          <div className="modal" ref={modalRef}>
            {children}
            <button onClick={closeModal} className="btn">Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;

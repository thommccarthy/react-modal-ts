import React, { useEffect, useRef } from 'react';
import useFocusTrap from '../hooks/useFocusTrap';
import './Modal.css';

type ModalProps = {
  showModal: boolean;
  onClose: () => void;
  children: React.ReactNode;
  triggerElementRef: React.RefObject<HTMLElement>;
};

const Modal = ({
  showModal,
  onClose,
  children,
  triggerElementRef,
}: ModalProps) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  useFocusTrap(modalRef, showModal);

  useEffect(() => {
    if (!showModal && triggerElementRef.current) {
      triggerElementRef.current.focus();
    }
  }, [showModal, triggerElementRef]);

  if (!showModal) {
    return null;
  }

  return (
    <div
      className='modal-backdrop'
      onClick={onClose}
      role='dialog'
      aria-modal='true'
      aria-label='Modal'
      ref={modalRef}
    >
      <div className='modal-content' onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose}>Close</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;

import React, { useEffect, useRef, useState } from 'react';
import useFocusTrap from '../hooks/useFocusTrap';
import './Modal.css';

type ModalProps = {
  showModal: boolean;
  onClose: () => void;
  children: React.ReactNode;
  triggerElementRef: React.RefObject<HTMLElement>;
  modalHeadingRef: React.RefObject<HTMLHeadingElement>;
};

const Modal = ({
  showModal,
  onClose,
  children,
  triggerElementRef,
  modalHeadingRef,
}: ModalProps) => {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const [labelledbyId, setLabelledbyId] = useState<string>('');

  useFocusTrap(modalRef, showModal);

  useEffect(() => {
    if (!showModal && triggerElementRef.current) {
      triggerElementRef.current.focus();
    }

    if (showModal && modalHeadingRef?.current?.id) {
      setLabelledbyId(modalHeadingRef.current.id);
    }
  }, [showModal, triggerElementRef, modalHeadingRef]);

  if (!showModal) {
    return null;
  }

  return (
    <div
      className='modal-backdrop'
      onClick={onClose}
      role='dialog'
      aria-modal='true'
      aria-labelledby={labelledbyId}
      ref={modalRef}
    >
      <div
        className='modal-content'
        onClick={(event) => event.stopPropagation()}
      >
        <button onClick={onClose}>Close</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;

import { useState, useRef, useEffect } from 'react';

const useModal = () => {
  const [showModal, setShowModal] = useState(false);
  const triggerElementRef = useRef<null | HTMLElement>(null);
  const modalHeadingRef = useRef<HTMLHeadingElement>(null);

  const openModal = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    triggerElementRef.current = event.currentTarget;
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && showModal === true) {
        closeModal();
        triggerElementRef.current?.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [showModal]);

  return {
    showModal,
    openModal,
    closeModal,
    triggerElementRef,
    modalHeadingRef,
  };
};

export default useModal;

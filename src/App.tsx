import { useState, useRef } from 'react';
import Modal from './components/Modal';

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const triggerElementRef = useRef<null | HTMLElement>(null);
  const modalHeadingRef = useRef<HTMLHeadingElement>(null);

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    triggerElementRef.current = event.currentTarget;
    setShowModal(true);
  };

  return (
    <div>
      <h1>Accessible React Modal</h1>
      <button onClick={handleClick}>Open Modal</button>

      <Modal
        showModal={showModal}
        onClose={() => setShowModal(false)}
        triggerElementRef={triggerElementRef}
        modalHeadingRef={modalHeadingRef}
      >
        <h2 ref={modalHeadingRef} id='sample-modal-heading'>
          Accessible Modal Example
        </h2>
        <p>
          This component provides a practical demonstration of an accessible
          modal dialog that secures user focus within its boundaries. By
          implementing it in React, we capitalize on the benefits of component
          reusability and scalability. TypeScript further fortifies our design
          by enhancing code clarity, simplifying intent recognition, and
          minimizing the potential for common errors.
        </p>
        <ul>
          <li>
            <a href='https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/'>
              ARIA Design Pattern for Modal Dialogs
            </a>
          </li>
          <li>
            <a href='https://react.dev/learn/reusing-logic-with-custom-hooks'>
              React Custom Hooks
            </a>
          </li>
        </ul>
      </Modal>
    </div>
  );
};

export default App;

import { useState, useRef } from 'react';
import Modal from './components/Modal';

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const triggerElementRef = useRef<null | HTMLElement>(null);

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
      >
        <h2>Hello, world!</h2>
        <p>Welcome to our modal dialog.</p>
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

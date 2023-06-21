import React, { useContext, useEffect, useState } from 'react';
import { Buttonsubmit } from './style';
import { ModalContext } from '../../../context/ModalContext';

// Creates a submit button with functionality that disables
// it for a while after clicking to prevent unwanted or repeated clicks.
// It receives a callback function as a property to be executed
// when the button is clicked.

interface SubmitButtonModalProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const SubmitButtonModal = ({ onClick }: SubmitButtonModalProps) => {
  // Define two internal states with the useState hook: disabled (enables/disables the button)
  // and clickCount (controls the number of clicks on the button)
  const [disabled, setDisabled] = useState(false);
  const [clickCount, setClickCount] = useState(1);
  const { openModal } = useContext(ModalContext);
  const { closeModalWelcome } = useContext(ModalContext);

  useEffect(() => {
    if (clickCount >= 1) {
      setDisabled(true);
      const timer = setTimeout(() => {
        setDisabled(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [clickCount]);

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    onClick(event);
    setClickCount(clickCount + 1);

    if (clickCount === 3) {
      closeModalWelcome();
      openModal();
    }
  };

  return (
    <Buttonsubmit disabled={disabled} onClick={handleClick}>
      {clickCount !== 3 ? 'Next' : 'Continue'}
    </Buttonsubmit>
  );
};

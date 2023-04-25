import React, { useContext } from 'react';
import { Buttonsubmit } from './style';
import { UserContext } from '../../../context/UserContext';
import { ModalContext } from '../../../context/ModalContext';

type InputName = {
  name: string;
  icon: string;
};

/**
 * Component that renders a submit button in a modal.
 * The button is disabled if the name is not filled in.
 */

export const SubmitButtonModal = ({ name, icon }: InputName) => {
  const { setUser } = useContext(UserContext);
  const { closeModal } = useContext(ModalContext);
  const { openModalWelcome } = useContext(ModalContext);

  const handleButtonClick = () => {
    setUser({ name: name, selectedIcon: icon });
    closeModal();
    openModalWelcome();
  };

  return (
    <Buttonsubmit disabled={!name} onClick={handleButtonClick}>
      Complete
    </Buttonsubmit>
  );
};

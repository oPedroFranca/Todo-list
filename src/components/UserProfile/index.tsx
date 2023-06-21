import React, { useContext } from 'react';
import { BsPencilFill } from 'react-icons/bs';
import { UserContext } from '../../context/UserContext';
import { UserDiv, UserSpan, IconDiv, IconSpan } from './style';
import { ModalContext } from '../../context/ModalContext';

/**
 * Component to display user profile.
 */
export const UserProfile = (): JSX.Element => {
  const { name, selectedIcon } = useContext(UserContext);

  const { openModal } = useContext(ModalContext);

  /**
   * Event handler to open profile edit modal.
   */
  function handleModalIsOpen() {
    openModal();
  }

  return (
    <UserDiv>
      <UserSpan>
        <p>Hello,</p>
        <h1>{name}</h1>
      </UserSpan>
      <IconDiv img={selectedIcon}>
        <IconSpan onClick={handleModalIsOpen}>
          <BsPencilFill className="icon_pencil" />
        </IconSpan>
      </IconDiv>
    </UserDiv>
  );
};

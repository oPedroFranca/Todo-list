import React from 'react';

import { ModalContent, ModalDiv } from './style';
import { ModalHeader } from '../ModalFormUser/ModalHeader';
import { ModalMain } from '../ModalFormUser/ModalMain';

export const WelcomeModal = () => {
  return (
    <ModalDiv>
      <ModalContent>
        <ModalHeader />

        <ModalMain />
      </ModalContent>
    </ModalDiv>
  );
};

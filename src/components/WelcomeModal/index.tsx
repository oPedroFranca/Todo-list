import React from 'react';

import { ModalContent, ModalDiv } from './style';
import { ModalMain } from './ModalMain';

export const WelcomeModal = () => {
  return (
    <ModalDiv>
      <ModalContent>
        <ModalMain />
      </ModalContent>
    </ModalDiv>
  );
};

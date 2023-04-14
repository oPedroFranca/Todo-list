import React from 'react';

import { ModalContent, ModalDiv } from './style';
import { ModalHeader } from './ModalHeader';
import { ModalMain } from './ModalMain';

export const ModalFormUser = () => {
  return (
    <ModalDiv>
      <ModalContent>
        <ModalHeader />

        <ModalMain />
      </ModalContent>
    </ModalDiv>
  );
};

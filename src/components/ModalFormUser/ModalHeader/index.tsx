import React from 'react';
import {
  ModalHeaderDiv,
  ModalHeaderIcon,
  ModalHeaderInfo,
  ModalHeaderSpan,
  ModalHeaderTitle,
} from './style';

export const ModalHeader = () => {
  return (
    <ModalHeaderDiv>
      <ModalHeaderSpan>
        <ModalHeaderIcon src="public/icons/icon-Todo.png" alt="" />
        <ModalHeaderTitle>To-do List.</ModalHeaderTitle>
      </ModalHeaderSpan>

      <ModalHeaderInfo>
        Simplify your daily routine with the help of our intuitive <br /> and
        easy-to-use to-do list.
      </ModalHeaderInfo>
    </ModalHeaderDiv>
  );
};

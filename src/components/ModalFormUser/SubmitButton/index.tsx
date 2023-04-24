import React from 'react';
import { Buttonsubmit } from './style';

type inputName = {
  name: string;
  onClick: () => void;
};

export const SubmitButtonModal = ({ name, onClick }: inputName) => {
  return (
    <Buttonsubmit disabled={!name} onClick={onClick}>
      Complete
    </Buttonsubmit>
  );
};

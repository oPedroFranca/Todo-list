import React from 'react';
import { Buttonsubmit } from './style';

type inputName = {
  name: string;
  onClick: () => void;
};

export const SubmitButtonModal = ({ name }: inputName) => {
  return <Buttonsubmit disabled={!name}>Complete</Buttonsubmit>;
};

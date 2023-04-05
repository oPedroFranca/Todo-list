import React from 'react';
import { Buttonsubmit } from './style';

type inputName = {
  name: string;
};

export const SubmitButtonModal = ({ name }: inputName) => {
  return <Buttonsubmit>Continue</Buttonsubmit>;
};

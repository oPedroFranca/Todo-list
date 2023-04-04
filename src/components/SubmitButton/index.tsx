import React from 'react';
import { Buttonsubmit } from './style';

type inputName = {
  name: string;
};

export const SubmitButtonModal = ({ name }: inputName) => {
  console.log(name);

  return <Buttonsubmit>Continue</Buttonsubmit>;
};

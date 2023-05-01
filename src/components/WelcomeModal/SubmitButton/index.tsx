import React from 'react';
import { Buttonsubmit } from './style';

interface SubmitButtonModalProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const SubmitButtonModal = ({ onClick }: SubmitButtonModalProps) => {
  return <Buttonsubmit onClick={onClick}>Next</Buttonsubmit>;
};

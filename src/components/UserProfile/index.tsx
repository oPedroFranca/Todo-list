import React from 'react';
import { IconDiv, IconSpan, UserDiv, UserSpan } from './style';
import { BsPencilFill } from 'react-icons/bs';

export const User_profile = (): JSX.Element => {
  return (
    <UserDiv>
      <UserSpan>
        <p>Hello,</p>
        <h1>Henrique</h1>
      </UserSpan>

      <IconDiv>
        <IconSpan>
          <BsPencilFill className="icon_pencil" />
        </IconSpan>
      </IconDiv>
    </UserDiv>
  );
};

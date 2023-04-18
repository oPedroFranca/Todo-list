import React from 'react';
import { IconDiv, IconSpan, UserDiv, UserSpan } from './style';
import { BsPencilFill } from 'react-icons/bs';

type UserProfileProps = {
  name: string | null;
  icon: string | null;
};

export const User_profile = ({ name, icon }: UserProfileProps): JSX.Element => {
  console.log(icon);

  return (
    <UserDiv>
      <UserSpan>
        <p>Hello,</p>
        <h1>{name}</h1>
      </UserSpan>

      <IconDiv img={icon ? icon : 'public/icon_user/icon_apple.png'}>
        <IconSpan>
          <BsPencilFill className="icon_pencil" />
        </IconSpan>
      </IconDiv>
    </UserDiv>
  );
};

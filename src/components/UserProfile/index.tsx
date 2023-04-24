import React, { useContext } from 'react';
import { IconDiv, IconSpan, UserDiv, UserSpan } from './style';
import { BsPencilFill } from 'react-icons/bs';
import { UserContext } from '../../context/UserContext';

export const User_profile = (): JSX.Element => {
  const user = useContext(UserContext);

  return (
    <UserDiv>
      <UserSpan>
        <p>Hello,</p>
        <h1>{user.name}</h1>
      </UserSpan>

      <IconDiv img={user.selectedIcon}>
        <IconSpan>
          <BsPencilFill className="icon_pencil" />
        </IconSpan>
      </IconDiv>
    </UserDiv>
  );
};

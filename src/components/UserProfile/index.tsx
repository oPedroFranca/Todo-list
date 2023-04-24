import React, { useContext } from 'react';
import { BsPencilFill } from 'react-icons/bs';
import { UserContext } from '../../context/UserContext';
import { UserDiv, UserSpan, IconDiv, IconSpan } from './style';

export const UserProfile = (): JSX.Element => {
  const { name, selectedIcon } = useContext(UserContext);

  return (
    <UserDiv>
      <UserSpan>
        <p>Hello,</p>
        <h1>{name}</h1>
      </UserSpan>
      <IconDiv img={selectedIcon}>
        <IconSpan>
          <BsPencilFill className="icon_pencil" />
        </IconSpan>
      </IconDiv>
    </UserDiv>
  );
};

/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, useState } from 'react';

interface User {
  name: string;
  selectedIcon: string;
}

interface UserDetailsProps {
  children: React.ReactNode;
}

interface UserContextType extends User {
  setUser: React.Dispatch<React.SetStateAction<User>>;
}

export const UserContext = createContext<UserContextType>({
  name: '',
  selectedIcon: '',
  setUser: () => {},
});

export function UserDetails({ children }: UserDetailsProps) {
  const [user, setUser] = useState<User>({
    name: 'User',
    selectedIcon: 'public/icon_user/icon_basketball.png',
  });

  const value = {
    ...user,
    setUser,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, useState } from 'react';

interface User {
  name: string;
  selectedIcon: string;
}

interface UserContextType extends User {
  setUser: React.Dispatch<React.SetStateAction<User>>;
}

interface UserDetailsProps {
  children: React.ReactNode;
}

// Create a new context for user details
export const UserContext = createContext<UserContextType>({
  name: '',
  selectedIcon: '',
  setUser: () => {},
});

export function UserDetails({ children }: UserDetailsProps) {
  const [user, setUser] = useState<User>({
    name: 'User',
    selectedIcon: 'public/icon_user/icon_carrot.png',
  });

  // Create a context value object with the user state and the setUser function
  const value: UserContextType = {
    ...user,
    setUser,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

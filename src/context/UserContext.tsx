import React, { createContext, useState } from 'react';

interface User {
  name: string;
  selectedIcon: string;
}

interface UserDetailsProps {
  children: React.ReactNode;
}

export const UserContext = createContext<User>({
  name: '',
  selectedIcon: '',
});

export function UserDetails({ children }: UserDetailsProps) {
  const [user, setUser] = useState<User>({
    name: 'User',
    selectedIcon: 'public/icon_user/icon_basketball.png',
  });

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}

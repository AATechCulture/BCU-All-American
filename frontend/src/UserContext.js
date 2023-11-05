// UserContext.js
import React, { createContext, useState } from 'react';

export const UserContext = createContext({
  username: '',
  setUsername: () => {},
});

export const UserProvider = ({ children }) => {
  const [username, setUsername] = useState('');

  return (
    <UserContext.Provider value={{ username, setUsername }}>
      {children}
    </UserContext.Provider>
  );
};
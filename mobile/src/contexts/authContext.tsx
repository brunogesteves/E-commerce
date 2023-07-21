import React, { createContext, useContext, useState } from 'react';

interface AuthContexPProps {
  userInfo: string;
  setUserInfo: (newState: string) => void;
}

const AuthContexProvider = createContext<AuthContexPProps>({
  userInfo: '',
  setUserInfo: () => {},
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [userInfo, setUserInfo] = useState<string>('');

  return (
    <AuthContexProvider.Provider
      value={{
        userInfo,
        setUserInfo,
      }}
    >
      {children}
    </AuthContexProvider.Provider>
  );
};

export function userLoggedInfo() {
  const userLoggedInfo = useContext(AuthContexProvider);
  return userLoggedInfo;
}

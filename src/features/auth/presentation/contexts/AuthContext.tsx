import { auth } from '@/shared/data/network/firebase';
import { User } from 'firebase/auth';
import React, { createContext, useState } from 'react';

type AuthContextValueProps = {
  isLoading: boolean;
  user: User | null;
  signOut: () => void;
};

type AuthContextProviderProps = {
  children: React.ReactElement;
};

export const AuthContext = createContext<AuthContextValueProps>({
  isLoading: true,
  user: null,
  signOut: () => false,
});

export default function AuthContextProvider(props: AuthContextProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const signOut = async () => {
    await auth.signOut();
  };

  auth.beforeAuthStateChanged(() => {
    setIsLoading(true);
  });

  auth.onAuthStateChanged((user) => {
    setUser(user);
  });

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        signOut,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

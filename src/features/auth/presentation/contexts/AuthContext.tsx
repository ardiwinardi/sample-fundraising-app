import { auth } from '@/shared/data/network/firebase';
import { User } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';

type AuthContextValueProps = {
  user: User | null;
  signOut: () => Promise<void>;
};

type AuthContextProviderProps = {
  children: React.ReactElement;
};

export const AuthContext = createContext<AuthContextValueProps>({
  user: null,
  signOut: () => new Promise((resolve) => resolve()),
});

export default function AuthContextProvider(props: AuthContextProviderProps) {
  const [user, setUser] = useState<User | null>(null);

  const signOut = async () => {
    await auth.signOut();
  };

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        signOut,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

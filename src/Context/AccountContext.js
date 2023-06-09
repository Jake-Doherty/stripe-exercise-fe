import { createContext, useContext, useState } from 'react';
import useAuth from '../hooks/useAuth.js';
const AccountContext = createContext();

const AccountProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const { fetchAuth, handleSignOut } = useAuth(setUser);

  return (
    <AccountContext.Provider value={{ fetchAuth, handleSignOut, user }}>
      {children}
    </AccountContext.Provider>
  );
};

const useAccount = () => {
  const context = useContext(AccountContext);
  if (context === undefined) {
    throw new Error('useAccount must be used within a AccountProvider');
  }
  return context;
};

export { AccountProvider, useAccount };

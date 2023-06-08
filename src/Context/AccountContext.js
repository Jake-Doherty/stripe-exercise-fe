import { createContext, useContext } from 'react';
import useAuth from '../hooks/useAuth.js';
const AccountContext = createContext();

const AccountProvider = ({ children }) => {
  const { fetchAuth, handleSignOut } = useAuth();
  return (
    <AccountContext.Provider value={{ fetchAuth, handleSignOut }}>
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

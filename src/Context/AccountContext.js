import { createContext, useContext, useState, useEffect } from 'react';
import useAuth from '../hooks/useAuth.js';
import { userPool } from '../services/userPool.js';

const AccountContext = createContext();

const AccountProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [user, setUser] = useState(null);

  const { fetchAuth, handleSignOut } = useAuth(setUser);

  const cognitoUser = userPool.getCurrentUser();

  useEffect(() => {
    if (cognitoUser !== null) {
      cognitoUser.getSession((err, session) => {
        if (err) {
          setIsAuthenticated(false);
          return;
        }
        setIsAuthenticated(session.isValid());
      });
    } else {
      setIsAuthenticated(false);
    }
  }, [cognitoUser]);

  return (
    <AccountContext.Provider
      value={{ fetchAuth, handleSignOut, user, isAuthenticated, setIsAuthenticated, setUser }}
    >
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

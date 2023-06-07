import { createContext, useContext } from 'react';
const AccountContext = createContext();

const AccountProvider = ({ children }) => {
  const fetchAuth = async ({ email, password, type }) => {
    if (type === 'sign-up') {
      try {
        const resp = await fetch('http://localhost:7890/api/v1/auth/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });
        const data = await resp.json();
        if (resp.ok) {
          return data;
        } else {
          return Promise.reject(data);
        }
      } catch (e) {
        console.error(e);
      }
    }
    if (type === 'sign-in') {
      try {
        const resp = await fetch('http://localhost:7890/api/v1/auth/signin', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });
        const data = await resp.json();
        if (resp.ok) {
          return data;
        } else {
          return Promise.reject(data);
        }
      } catch (e) {
        console.error(e);
      }
    }
  };
  return <AccountContext.Provider value={{ fetchAuth }}>{children}</AccountContext.Provider>;
};

const useAccount = () => {
  const context = useContext(AccountContext);
  if (context === undefined) {
    throw new Error('useAccount must be used within a AccountProvider');
  }
  return context;
};

export { AccountProvider, useAccount };

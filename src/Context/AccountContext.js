import { createContext, useContext } from 'react';
const AccountContext = createContext();

const AccountProvider = ({ children }) => {
  async function fetchSignUp({ email, password }) {
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
  async function fetchSignIn({ email, password }) {
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
  return (
    <AccountContext.Provider value={{ fetchSignUp, fetchSignIn }}>
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

import { createContext, useContext } from 'react';
import userPool from '../services/userPool.js';
const AccountContext = createContext();

const AccountProvider = ({ children }) => {
  const signup = async ({ email, name, password }) => {
    return await new Promise((resolve, reject) => {
      let attributeList = [];
      let userName = {
        Name: 'name',
        Value: name,
      };
      attributeList.push(userName);

      userPool.signUp(email, password, attributeList, null, (err, result) => {
        if (err) {
          console.log('Failed to register', err.message);
          reject();
        } else {
          console.log('Account created successfully', result);
          resolve();
        }
      });
    });
  };
  return <AccountContext.Provider value={{ signup }}>{children}</AccountContext.Provider>;
};

const useAccount = () => {
  const context = useContext(AccountContext);
  if (context === undefined) {
    throw new Error('useAccount must be used within a AccountProvider');
  }
  return context;
};

export { AccountProvider, useAccount };

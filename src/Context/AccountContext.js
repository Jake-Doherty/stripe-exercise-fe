import { createContext, useContext, useState, useEffect } from 'react';
// import { CognitoUserPool } from 'amazon-cognito-identity-js';
import useAuth from '../hooks/useAuth.js';
import { userPool } from '../services/userPool.js';

const AccountContext = createContext();

const AccountProvider = ({ children }) => {
  // const poolData = {
  //   UserPoolId: process.env.REACT_APP_POOL_ID,
  //   ClientId: process.env.REACT_APP_APP_CLIENT_ID,
  // };
  // const userPool = new CognitoUserPool(poolData);
  // console.log('userPool', userPool);

  const cognitoUser = userPool.getCurrentUser();
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [user, setUser] = useState(null);
  const { fetchAuth, handleSignOut } = useAuth(setUser);
  const [idToken, setIdToken] = useState(null);

  useEffect(() => {
    if (cognitoUser !== null) {
      cognitoUser.getSession((err, session) => {
        if (err) {
          setIsAuthenticated(false);
          return;
        } else if (session.isValid()) {
          let token = session.getIdToken().getJwtToken();
          setIdToken(token); // set the token
          //get session token now send to the backend to verify the token is valid and
          // not expired yet and then return the user data from the backend to the frontend and then set the user data to the state and
          //  then set the isAuthenticated to true and then redirect the user to the dashboard page and then display the user data on the
          // dashboard page and then display the logout button on the dashboard page <-- gpt suggestions...?
        }
        setIsAuthenticated(session.isValid());
      });
    } else {
      setIsAuthenticated(false);
    }
  }, [cognitoUser]);

  return (
    <AccountContext.Provider
      value={{
        fetchAuth,
        handleSignOut,
        user,
        isAuthenticated,
        setIsAuthenticated,
        setUser,
        idToken,
      }}
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

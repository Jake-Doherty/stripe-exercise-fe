const { userPool, AmazonCognitoIdentity } = require('../services/userPool.js');

export default function useAuth() {
  const fetchAuth = async ({ email, password, type }) => {
    if (type === 'sign-up') {
      try {
        const result = await new Promise((resolve, reject) => {
          const attributeList = [
            new AmazonCognitoIdentity.CognitoUserAttribute({
              Name: 'email',
              Value: email,
            }),
          ];

          userPool.signUp(email, password, attributeList, null, (err, result) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          });
        });

        // fetch call to our server to enter email and sub into our database
        const resp = await fetch('http://localhost:7890/api/v1/auth/sign-up', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, sub: result.userSub }),
        });

        const data = await resp.json();

        if (resp.ok) {
          location.replace('/auth/sign-in');
          return data;
        } else {
          throw data;
        }
      } catch (e) {
        console.error(e);
        throw e;
      }
    } else if (type === 'sign-in') {
      try {
        return new Promise((resolve, reject) => {
          const authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails({
            Username: email,
            Password: password,
          });

          const cognitoUser = new AmazonCognitoIdentity.CognitoUser({
            Username: email,
            Pool: userPool,
          });

          cognitoUser.authenticateUser(authenticationDetails, {
            onSuccess: (result) => {
              resolve(result);
            },
            onFailure: (err) => {
              reject(err);
            },
          });
        });
        // const resp = await fetch('http://localhost:7890/api/v1/auth/sign-in', {
        //   method: 'POST',
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },
        //   body: JSON.stringify({ email, password }),
        //   credentials: 'include',
        // });
        // const data = await resp.json();
        // if (resp.ok) {
        //   setUser(data.user);
        //   return data;
        // } else {
        //   return Promise.reject(data);
        // }
      } catch (e) {
        console.error(e);
      }
    }
  };

  const handleSignOut = async (email_1, setUser, setIsAuthenticated) => {
    try {
      /////////////////
      return new Promise((resolve, reject) => {
        const cognitoUser = new AmazonCognitoIdentity.CognitoUser({
          Username: email_1,
          Pool: userPool,
        });

        cognitoUser.signOut();

        // You could also check the current session to ensure the user is signed out
        cognitoUser.getSession((err, session) => {
          if (err || !session.isValid()) {
            setUser(null);
            setIsAuthenticated(false);
            resolve();
          } else {
            reject('User is still signed in');
          }
        });
      });
      /////////////////
      // const resp = await fetch('http://localhost:7890/api/v1/auth/sign-out', {
      //   method: 'POST',
      //   credentials: 'include',
      //   body: JSON.stringify({ email_1 }),
      // });
      // const data = await resp.json();
      // if (resp.ok) {
      //   setUser(null);
      //   return data;
      // } else {
      //   return Promise.reject(data);
      // }
    } catch (e) {
      console.error(e);
    }
  };
  return { fetchAuth, handleSignOut };
}

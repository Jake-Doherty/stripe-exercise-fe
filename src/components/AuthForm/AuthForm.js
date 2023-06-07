import React, { useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useAccount } from '../../Context/AccountContext.js';

export default function AuthForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { fetchAuth } = useAccount();
  const { type } = useParams();

  const handleRegistration = async (e) => {
    e.preventDefault();
    try {
      await fetchAuth({ email, password, type });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="sign-in-sign-out">
        {type === 'sign-in' ? (
          <NavLink to="/auth/sign-up">{`Don't have an account yet? Sign-up here.`}</NavLink>
        ) : (
          <NavLink to="/auth/sign-in"> Already have an account? Sign-in here.</NavLink>
        )}
      </div>

      <div className="email-container">
        <input
          autoComplete="off"
          className="input"
          type="email"
          placeholder="email@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          autoComplete="off"
          className="input"
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div>
        <button onClick={(e) => handleRegistration(e)}>Submit</button>
      </div>
    </form>
  );
}

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useAccount } from '../../Context/AccountContext.js';

export default function AuthForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { fetchSignUp } = useAccount();

  const handleRegistration = async (e) => {
    e.preventDefault();
    try {
      await fetchSignUp({ email, password });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="sign-in-sign-out">
        <NavLink to="/auth/sign-in">Sign-in</NavLink>
        <NavLink to="/auth/sign-up">Sign-up</NavLink>
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

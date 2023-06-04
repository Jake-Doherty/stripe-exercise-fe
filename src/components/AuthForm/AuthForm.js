import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useAccount } from '../../Context/AccountContext.js';

export default function AuthForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signup } = useAccount;

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="sign-in-sign-out">
        <NavLink to="/auth/sign-in">Sign-in</NavLink>
        <NavLink to="/auth/sign-up">Sign-up</NavLink>
      </div>

      <div className="email-container">
        <input className="input" type="email" placeholder="email@email.com" value={email} />

        <input className="input" type="password" placeholder="password" value={password} />
      </div>

      <div>
        <button onClick={signup}>Submit</button>
      </div>
    </form>
  );
}

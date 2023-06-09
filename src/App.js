import { Routes, Route, Navigate } from 'react-router-dom';
import React from 'react';
import './App.css';
import Button from './components/Button/Button.js';
import Success from './components/Success/Success.js';
import Cancel from './components/Cancel/Cancel.js';
import AuthForm from './components/AuthForm/AuthForm.js';
import { useAccount } from './Context/AccountContext.js';
function App() {
  const { user } = useAccount();
  return (
    <div className="App">
      <Routes>
        <Route path="/auth/:type" element={<AuthForm />} />
        <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Cancel />} />
        <Route path="/" element={user ? <Button /> : <Navigate to={'/auth/sign-in'} />} />
        {/* <Route path="/" element={<Button />} /> */}
      </Routes>
    </div>
  );
}

export default App;

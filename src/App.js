import { Routes, Route, useNavigate } from 'react-router-dom';
import React from 'react';
import './App.css';
import Button from './components/Button/Button.js';
import Success from './components/Success/Success.js';
import Cancel from './components/Cancel/Cancel.js';

function App() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Button />} />
        <Route path="/success" element={<Success {...{ navigate }} />} />
        <Route path="/cancel" element={<Cancel {...{ navigate }} />} />
      </Routes>
    </div>
  );
}

export default App;

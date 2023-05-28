import { Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import Button from './components/Button/Button.js';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Button />} />
        <Route path="/success" element={<h1>Success!</h1>} />
        <Route path="/cancel" element={<h1>Cancel!</h1>} />
      </Routes>
    </div>
  );
}

export default App;

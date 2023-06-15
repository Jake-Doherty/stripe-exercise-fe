import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Success() {
  const navigate = useNavigate();
  return (
    <>
      <h1>Success!</h1>
      <button onClick={() => navigate('/')}>Go Back</button>
    </>
  );
}

import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Cancel() {
  const navigate = useNavigate();
  return (
    <>
      <h1>Cancel</h1>
      <button onClick={() => navigate('/')}>Go Back</button>
    </>
  );
}

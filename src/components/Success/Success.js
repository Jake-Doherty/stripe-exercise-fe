import React from 'react';
import { Navigate } from 'react-router-dom';

export default function Success() {
  return (
    <>
      <h1>Success!</h1>
      <button onClick={() => <Navigate to={'/'} />}>Go Back</button>
    </>
  );
}

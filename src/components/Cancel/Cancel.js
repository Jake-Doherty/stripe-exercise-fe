import React from 'react';
import { Navigate } from 'react-router-dom';

export default function Cancel() {
  return (
    <>
      <h1>Cancel</h1>
      <button onClick={() => <Navigate to={'/'} />}>Go Back</button>
    </>
  );
}

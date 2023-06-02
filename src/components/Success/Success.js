import React from 'react';

export default function Success({ navigate }) {
  return (
    <>
      <h1>Success!</h1>
      <button onClick={() => navigate('/')}>Go Back</button>
    </>
  );
}

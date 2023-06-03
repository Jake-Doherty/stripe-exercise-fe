import React from 'react';

export default function Cancel({ navigate }) {
  return (
    <>
      <h1>Cancel</h1>
      <button onClick={() => navigate('/')}>Go Back</button>
    </>
  );
}

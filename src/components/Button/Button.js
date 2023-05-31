import React from 'react';
import { fetchStripe } from '../../services/stripe.js';

export default function Button() {
  const handleClick = async () => {
    const data = await fetchStripe();
    return data;
  };

  return <button onClick={handleClick}>Monthly</button>;
}

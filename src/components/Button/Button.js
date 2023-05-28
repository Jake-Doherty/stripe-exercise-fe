import React from 'react';
import { fetchStripe } from '../../services/stripe.js';

export default function Button() {
  const handleClick = async () => {
    console.log(`THOU HAST CLICKITHED ME!`);
    const data = await fetchStripe();
    return data;
  };

  return <button onClick={handleClick}>Button</button>;
}

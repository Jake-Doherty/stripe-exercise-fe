import React from 'react';
import { fetchStripe } from '../../services/stripe.js';

export default function Button() {
  const handleClick = async (e) => {
    const priceId = e.target.value;
    const data = await fetchStripe({ priceId });
    return data;
  };

  return (
    <>
      <button
        style={{ margin: '10px' }}
        value={'price_1NCti2BhW6CkNmXjGPYwdTx6'}
        onClick={(e) => handleClick(e)}
      >
        Monthly
      </button>
      <button
        style={{ margin: '10px' }}
        value={'price_1NCtiXBhW6CkNmXjtbi0h2Om'}
        onClick={(e) => handleClick(e)}
      >
        Annual
      </button>
    </>
  );
}

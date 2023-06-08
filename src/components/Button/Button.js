import React from 'react';
import { fetchStripe, fetchCustomerPortal } from '../../services/stripe.js';
import { useAccount } from '../../Context/AccountContext.js';

export default function Button() {
  const { handleSignOut } = useAccount();

  const handleClick = async (e) => {
    const priceId = e.target.value;
    const data = await fetchStripe({ priceId });
    return data;
  };

  const handleCustomerPortal = async () => {
    const data = await fetchCustomerPortal();
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
      <button style={{ margin: '10px' }} onClick={(e) => handleCustomerPortal(e)}>
        Customer Portal
      </button>
      <button value={'fumalicious@gmail.com'} onClick={(e) => handleSignOut(e.target.value)}>
        Sign Out
      </button>
    </>
  );
}

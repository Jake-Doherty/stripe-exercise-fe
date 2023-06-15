export async function fetchStripe({ priceId, user }) {
  try {
    const resp = await fetch('http://localhost:7890/api/v1/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ priceId, user }),
      credentials: 'include',
    });
    const data = await resp.json();

    if (resp.ok) {
      window.location = data.url;
      return resp;
    } else {
      return Promise.reject(data);
    }
  } catch (e) {
    console.error(e);
  }
}

export async function fetchCustomerPortal() {
  try {
    const resp = await fetch('http://localhost:7890/api/v1/create-customer-portal-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });
    const data = await resp.json();

    if (resp.ok) {
      window.location = data.url;
    } else {
      return Promise.reject(data);
    }
  } catch (e) {
    console.error(e);
  }
}

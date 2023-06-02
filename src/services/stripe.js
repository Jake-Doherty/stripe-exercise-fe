export async function fetchStripe({ priceId }) {
  try {
    const resp = await fetch('http://localhost:7890/api/v1/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ priceId }),
    });
    const data = await resp.json();

    if (resp.ok) {
      window.location = data.url;
      return resp.json();
    } else {
      return Promise.reject(data);
    }
  } catch (e) {
    console.error(e);
  }
}

export async function fetchStripe() {
  try {
    const resp = await fetch('/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        items: [
          { id: 1, quantity: 3 },
          { id: 2, quantity: 3 },
        ],
      }),
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

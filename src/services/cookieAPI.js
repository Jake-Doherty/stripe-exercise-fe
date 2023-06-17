const createCookies = async (result) => {
  try {
    const cookies = await fetch('http://localhost:7890/api/v1/auth/create-cookie', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(result),
    });
    return cookies;
  } catch (e) {
    console.error(e);
  }
};

const deleteCookies = async () => {
  try {
    const data = await fetch('http://localhost:7890/api/v1/auth/clear-cookies', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });
    return data.json();
  } catch (e) {
    console.error(e);
  }
};

module.exports = {
  createCookies,
  deleteCookies,
};

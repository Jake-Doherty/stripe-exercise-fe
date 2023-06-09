export default function useAuth(setUser) {
  const fetchAuth = async ({ email, password, type }) => {
    if (type === 'sign-up') {
      try {
        const resp = await fetch('http://localhost:7890/api/v1/auth/sign-up', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });
        const data = await resp.json();
        if (resp.ok) {
          location.replace('/auth/sign-in');
          return data;
        } else {
          return Promise.reject(data);
        }
      } catch (e) {
        console.error(e);
      }
    }
    if (type === 'sign-in') {
      try {
        const resp = await fetch('http://localhost:7890/api/v1/auth/sign-in', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
          credentials: 'include',
        });
        const data = await resp.json();
        if (resp.ok) {
          setUser(data.user.sub);

          return data;
        } else {
          return Promise.reject(data);
        }
      } catch (e) {
        console.error(e);
      }
    }
  };

  const handleSignOut = async (email_1) => {
    try {
      const resp = await fetch('http://localhost:7890/api/v1/auth/sign-out', {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify({ email_1 }),
      });
      const data = await resp.json();
      if (resp.ok) {
        setUser(null);
        return data;
      } else {
        return Promise.reject(data);
      }
    } catch (e) {
      console.error(e);
    }
  };
  return { fetchAuth, handleSignOut };
}

export const getToken = () => localStorage.getItem('token');
export const setToken = (token) => localStorage.setItem('token', token);
export const removeToken = () => localStorage.removeItem('token');

export const fetchUser = async (token) => {
  try {
    const res = await fetch("http://localhost:1337/api/users/me", {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!res.ok) throw new Error("Invalid token");
    return await res.json();
  } catch (err) {
    console.error("Fetch user failed:", err);
    return null;
  }
};

import { useState, useCallback, useEffect } from "react";

const storageName = "userData";

export const useAuth = () => {
  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState(null);
  const [userName, setName] = useState(null);

  const login = useCallback((jwtToken, id, userName) => {
    setToken(jwtToken);
    setUserId(id);
    setName(userName);

    localStorage.setItem(
      storageName,
      JSON.stringify({ userId: id, token: jwtToken, userName })
    );
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setUserId(null);
    setName(null);
    localStorage.removeItem(storageName);
  }, []);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(storageName));
    if (data && data.token) {
      login(data.token, data.userId, data.userName);
    }
  }, [login]);

  return { login, logout, token, userId, userName };
};

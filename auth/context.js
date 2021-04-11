import { useState, createContext, useContext, useEffect } from "react";
import api from "./axios";
import Router from "next/router";
import { setCookie, removeCookie, getCookieFromBrowser } from "./cookies";
import jwt from "jwt-decode";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadUserFromCookies() {
      const token = getCookieFromBrowser("token");
      if (token) {
        try {
          api.defaults.headers.Authorization = `Bearer ${token}`;
          const userData = jwt(token);
          const { data: user } = await api.get(`/api/user/${userData._id}`);
          if (user) setUser(user);
        } catch (e) {
          if (e.response.status === 401) {
            removeCookie("token");
            setUser(null);
            window.alert("Session expiré veuillez vous reconnecter");
          }
        }
      }
      setLoading(false);
    }
    loadUserFromCookies();
  }, []);
  const login = async (username, password) => {
    const { data: token } = await api.post("/api/login", {
      username,
      password,
    });

    if (token) {
      setCookie("token", token);
      api.defaults.headers.Authorization = `Bearer ${token}`;
      const userData = jwt(token);
      const { data: user } = await api.get(`/api/user/${userData._id}`);
      setUser(user);
      await Router.push("/");
    }
  };

  const logout = () => {
    removeCookie("token");
    setUser(null);
    Router.push("/");
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated: !!user, user, login, logout, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default function useAuth() {
  return useContext(AuthContext);
}

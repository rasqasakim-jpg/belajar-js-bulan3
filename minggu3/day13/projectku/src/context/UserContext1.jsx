import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider1 = ({ children }) => {
  const [user, setUser] = useState({
    name: "Guest",
    email: "guest@example.com",
    isLoggedIn: false,
  });

  const login = (name, email) => {
    setUser({ name, email, isLoggedIn: true });
  };

  const logout = () => {
    setUser({ name: "Guest", email: "guest@example.com", isLoggedIn: false });
  };

  const updateProfile = (name, email) => {
    setUser((prev) => ({ ...prev, name, email }));
  };

  return (
    <UserContext.Provider value={{ user, login, logout, updateProfile }}>
      {children}
    </UserContext.Provider>
  );
};

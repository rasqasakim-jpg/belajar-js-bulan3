import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    isLoggedIn: false,
  });

  const login = (name, email) => {
    setUser({
      name,
      email,
      isLoggedIn: true,
    });
  };

  const logout = () => {
    setUser({
      name: "",
      email: "",
      isLoggedIn: false,
    });
  };

  const updateProfile = (newName, newEmail) => {
    setUser((prev) => ({
      ...prev,
      name: newName,
      email: newEmail,
    }));
  };

  return (
    <UserContext.Provider value={{ user, login, logout, updateProfile }}>
      {children}
    </UserContext.Provider>
  );
};

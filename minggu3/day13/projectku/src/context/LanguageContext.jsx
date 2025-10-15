import React, { createContext, useState } from "react";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("ID"); // Default Indonesia

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "ID" ? "EN" : "ID"));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

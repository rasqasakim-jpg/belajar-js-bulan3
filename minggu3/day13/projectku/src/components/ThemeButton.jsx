// src/components/ThemedButton.jsx
import React from "react";
import { useTheme } from "../context/ThemeContext";

export default function ThemedButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      style={{
        padding: "10px 20px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        backgroundColor: theme === "light" ? "#9c9999ff" : "#ddd",
        color: theme === "light" ? "#fff" : "#000",
      }}
    >
      Toggle Theme ({theme})
    </button>
  );
}

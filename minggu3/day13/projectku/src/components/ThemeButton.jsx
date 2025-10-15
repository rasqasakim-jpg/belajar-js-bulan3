import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function ThemedButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <button
      onClick={toggleTheme} className="themed-button">
      Toggle Theme
    </button>
  );
}

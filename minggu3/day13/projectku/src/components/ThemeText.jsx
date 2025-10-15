import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function ThemedText() {
  const { theme } = useContext(ThemeContext);

  return (
    <p className="themed-text">
      Ini adalah teks dengan tema <strong>{theme.toUpperCase()}</strong>
    </p>
  );
}

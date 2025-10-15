import React from "react";
import { useTheme } from "../context/ThemeContext";

export default function ThemedText() {
  const { theme } = useTheme();

  return (
    <p style={{ color: theme === "light" ? "#000" : "#fff" }}>
    {/* tema: {theme} */}
    </p>
  );
}

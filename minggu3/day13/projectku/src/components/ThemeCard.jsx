import React from "react";
import { useTheme } from "../context/ThemeContext";

export default function ThemedCard() {
  const { theme } = useTheme();

  return (
    <div
      style={{
        padding: "20px",
        marginTop: "20px",
        borderRadius: "8px",
        backgroundColor: theme === "light" ? "#f5f5f5" : "#000000ff",
        color: theme === "light" ? "#000" : "#fff",
      }}
    >
      <h3>Theme Card</h3>
      <p>{theme}</p>
    </div>
  );
}

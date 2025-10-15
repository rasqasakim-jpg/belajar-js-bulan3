import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function ThemedCard() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="themed-card">
      <h3>Ini Card dengan Tema {theme === "light" ? "🌞 Light" : "🌙 Dark"}</h3>
      <p>Background dan warna teks menyesuaikan dengan tema yang aktif.</p>
    </div>
  );
}

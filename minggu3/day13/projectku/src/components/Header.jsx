// src/components/Header.jsx
import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { NotificationContext } from "../context/NotificationContext";

export default function Header() {
  const { language, toggleLanguage } = useContext(LanguageContext);
  const { notifications, addNotification, clearNotification } =
    useContext(NotificationContext);

  return (
    <header style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
      <h2>🌐 Language: {language}</h2>
      <p>🔔 Notifications: {notifications}</p>

      <button onClick={toggleLanguage}>
        Ganti Bahasa ({language === "ID" ? "Switch to EN" : "Ganti ke ID"})
      </button>

      <button onClick={addNotification}>Tambah Notif</button>
      <button onClick={clearNotification}>Clear Notif</button>
    </header>
  );
}


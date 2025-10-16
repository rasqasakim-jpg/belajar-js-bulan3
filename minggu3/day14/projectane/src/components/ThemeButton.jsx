import React from "react";
import { useTheme } from "../context/ThemeContext";

export default function ThemeButton() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            style={{
                padding: "10px 20px",
                borderRadius: "25px",
                border: "none",
                cursor: "pointer",
                fontSize: "16px",
                fontWeight: "bold",
                transition: "all 0.3s ease",
                backgroundColor: theme === "light" ? "#222" : "#f1c40f",
                color: theme === "light" ? "#fff" : "#000",
                boxShadow: "0px 4px 8px rgba(0,0,0,0.2)"
            }}
            onMouseOver={(e) => (e.target.style.opacity = "0.8")}
            onMouseOut={(e) => (e.target.style.opacity = "1")}
        >
            {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
        </button>
    );
}

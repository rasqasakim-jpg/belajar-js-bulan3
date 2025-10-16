import React, { createContext, useContext, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useLocalStorage("theme", "light");

    useEffect(() => {
        document.body.style.backgroundColor = theme === "light" ? "#fff" : "#000000ff";
        document.body.style.color = theme === "light" ? "#000" : "#fff";
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export const useTheme = () => useContext(ThemeContext);

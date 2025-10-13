import React, {useContext} from "react";
import { ThemeContext } from "./ThemeContext";

export default function ThemeContent() {
    const {theme} = useContext(ThemeContext);

    const style = {
        padding: "20px",
        marginTop: "20px",
        backgroundColor: theme === "light" ? "white" : "black",
        color: theme === "light" ? "black" : "white",
    };

    return (
        <div style={style}>
            <h2>theme context</h2>
            <p>Tema saat ini: {theme}</p>
        </div>
    );

}
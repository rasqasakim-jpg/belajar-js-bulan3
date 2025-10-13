import React, {useContext} from "react";
import {ThemeContext} from "./ThemeContext";

export default function ThemeButton() {
    const {toggleTheme} = useContext(ThemeContext);

    return (
        <button onClick={toggleTheme}>
            Ganti tema
        </button>
    )

}
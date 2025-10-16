import React from "react";
import useToggle from "../hooks/useToggle";

export default function ToggleText() {
    const [isVisible, toggleVisible] = useToggle(false);

    return (
        <div>
            <button onClick={toggleVisible}>
                {isVisible ? "hide" : "show text"}
            </button>
            {isVisible && <p>Selamat Datang</p>}
        </div>
    );
}
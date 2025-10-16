import React from "react";
import useToggle from "../hooks/useToggle";

export default function ToggleSwitch() {
    const [isOn, toggleOn] = useToggle(true);

    return (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
            <p>Status: {isOn ? "ON" : "OFF"}</p>
            
            <div
                onClick={toggleOn}
                style={{
                    width: "60px",
                    height: "30px",
                    borderRadius: "30px",
                    backgroundColor: isOn ? "green" : "red",
                    display: "flex",
                    alignItems: "center",
                    padding: "3px",
                    cursor: "pointer",
                    transition: "background-color 0.3s ease"
                }}
            >
                <div
                    style={{
                        width: "24px",
                        height: "24px",
                        borderRadius: "50%",
                        backgroundColor: "white",
                        transform: isOn ? "translateX(30px)" : "translateX(0px)",
                        transition: "transform 0.3s ease"
                    }}
                />
            </div>
        </div>
    );
}

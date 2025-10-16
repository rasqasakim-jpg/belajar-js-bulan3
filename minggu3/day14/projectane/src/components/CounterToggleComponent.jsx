import React from "react";
import { useCounterWithToggle } from "../hooks/useCounterWtihToggle";

export default function CounterToggleComponent() {
    const { count, increment, decrement, reset, isOn, toggle } = 
    useCounterWithToggle(0, true);

    return (
        <div style={{textAlign: "center", marginTop: "20px"}}>
            <h2>Hook Komposisi: Counter + Toggle</h2>

            {isOn && <h3>Count: {count}</h3>}

            <div style={{marginBottom: "15px"}}>
                <button onClick={increment}>Tambah</button>
                <button onClick={decrement}>Kurang</button>
                <button onClick={reset}>Reset</button>
            </div>

            <div
                onClick={toggle}
                style={{
                    width: "60px",
                    height: "30px",
                    borderRadius: "30px",
                    backgroundColor: isOn ? "green" : "red",
                    display: "flex",
                    alignItems: "center",
                    padding: "3px",
                    cursor: "pointer",
                    margin: "0 auto", // biar center
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
            <p style={{marginTop: "5px"}}>{isOn ? "ON" : "OFF"}</p>
        </div>
    );
}

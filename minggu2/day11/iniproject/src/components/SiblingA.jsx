import React from "react";

export default function SiblingA({setText}) {
    return (
        <div style={{border: "1px solid", margin: "10px", padding: "10px" }}>
            <h3>Sibling A (untuk input)</h3>
            <input 
            type="text" 
            placeholder="Ketik sesuatu..."
            onChange={(e) => setText(e.target.value)}
            />
        </div>
    );
}
import React from "react";

export default function SiblingB({text}) {
    return (
        <div style={{border: "1px solid", margin: "10px", padding: "10px"}}>
            <h3>Sibling B (output)</h3>
            <p>Text dari Sibling A: <strong>{text}</strong></p>
        </div>
    );
}
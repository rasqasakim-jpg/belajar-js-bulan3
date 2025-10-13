import React from "react";
import ComponentC from "./ComponentC";

export default function ComponentB({message}) {
    return (
        <div style={boxStyle}>
            <h2>Component B</h2>
            <ComponentC message={message} />
        </div>
    );
}

const boxStyle = {
    border: "1px solid",
    padding: "10px",
    margin: "10px"
}
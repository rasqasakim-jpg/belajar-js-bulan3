import React from "react";
import ComponentB from "./ComponentB";

export default function ComponentA({message}) {
    return (
        <div style={boxStyle}>
            <h2>Component A</h2>
            <ComponentB message={message} />
        </div>
    );
}

const boxStyle = {
    border: "1px solid",
    padding: "10px",
    margin: "10px"
}
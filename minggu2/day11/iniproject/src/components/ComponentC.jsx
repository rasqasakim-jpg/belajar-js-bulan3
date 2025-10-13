import React from "react";

export default function ComponentC({message}) {
    return (
        <div style={finalBox}>
            <h2>Component C</h2>
            <p><strong>Pesan diterima melalui Prop Drilling</strong></p>
            <p>{message}</p>
        </div>
    );
}

const finalBox = {
    border: "1px solid",
    padding: "10px",
    margin: "10px",
    backgroundColor: "grey"    
};
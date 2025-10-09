import React, { useState } from "react";

export default function EventHandling() {
  const [message, setMessage] = useState("Arahkan mouse atau klik tombol ini");
  const [color, setColor] = useState("lightgray");

  const handleClick = () => {
    setMessage("Tombol diklik!");
    // setColor("lightgreen");
    alert("Tombol diklik!");
  };

  const handleMouseEnter = () => {
    setMessage("Mouse berada di atas tombol");
    setColor("lightblue");
  };

  const handleMouseLeave = () => {
    setMessage("Mouse keluar dari tombol");
    setColor("lightgray");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Event Handler Sederhana</h2>
      <button
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          backgroundColor: color,
          border: "1px solid gray",
          padding: "10px 20px",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Tombol
      </button>
      <p>{message}</p>
    </div>
  );
}

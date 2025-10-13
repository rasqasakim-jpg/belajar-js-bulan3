import React, { useState } from "react";

export default function Temperature() {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");

  const handleCelsiusChange = (e) => {
    const value = e.target.value;
    setCelsius(value);
    setFahrenheit(value === "" ? "" : (value * 9) / 5 + 32);
  };

  const handleFahrenheitChange = (e) => {
    const value = e.target.value;
    setFahrenheit(value);
    setCelsius(value === "" ? "" : ((value - 32) * 5) / 9);
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Lifting State Up - Konversi Suhu</h2>

      <div style={inputGroupStyle}>
        <label style={labelStyle}>Celsius:</label>
        <input
          type="number"
          value={celsius}
          onChange={handleCelsiusChange}
          style={inputStyle}
          placeholder="Masukkan °C"
        />
      </div>

      <div style={inputGroupStyle}>
        <label style={labelStyle}>Fahrenheit:</label>
        <input
          type="number"
          value={fahrenheit}
          onChange={handleFahrenheitChange}
          style={inputStyle}
          placeholder="Masukkan °F"
        />
      </div>
      <p>Suhu dalam Celsius: {celsius}</p>
      <p>Suhu dalam Fahrenheit: {fahrenheit}</p>
    </div>
  );
}

const containerStyle = {
  maxWidth: "350px",
  margin: "40px auto",
  padding: "20px",
  border: "1px solid #ddd",
  borderRadius: "10px",
  textAlign: "center",
  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  fontFamily: "Arial, sans-serif"
};

const titleStyle = {
  marginBottom: "20px",
  fontWeight: "bold",
  color: "#333"
};

const inputGroupStyle = {
  marginBottom: "15px",
  textAlign: "left"
};

const labelStyle = {
  display: "block",
  marginBottom: "5px",
  fontSize: "14px",
  fontWeight: "600"
};

const inputStyle = {
  width: "100%",
  padding: "8px",
  borderRadius: "5px",
  border: "1px solid #ccc",
};

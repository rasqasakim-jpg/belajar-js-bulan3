import React, { useState } from "react";

export default function StatusMessage() {
  const [status, setStatus] = useState("loading");

  let message;

  switch (status) {
    case "loading":
      message = <p style={{ color: "black" }}> Sedang memuat data...</p>;
      break;
    case "success":
      message = <p style={{ color: "green" }}> Data berhasil dimuat</p>;
      break;
    case "error":
      message = <p style={{ color: "red" }}> Terjadi kesalahan saat memuat data.</p>;
      break;
    default:
      message = <p style={{ color: "gray" }}> Status tidak diketahui.</p>;
      break;
  }

  return (
    <div
      style={{
        textAlign: "center",
        padding: "20px",
        marginTop: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        width: "350px",
        margin: "20px auto",
      }}
    >
      <h3>Status Sistem</h3>
      {message}

      <div style={{ marginTop: "15px" }}>
        <button
          onClick={() => setStatus("loading")}
          style={{ marginRight: "5px", cursor: "pointer" }}
        >
          Loading
        </button>
        <button
          onClick={() => setStatus("success")}
          style={{ marginRight: "5px", cursor: "pointer" }}
        >
          Success
        </button>
        <button
          onClick={() => setStatus("error")}
          style={{ marginRight: "5px", cursor: "pointer" }}
        >
          Error
        </button>
        <button
          onClick={() => setStatus("unknown")}
          style={{ cursor: "pointer" }}
        >
          Unknown
        </button>
      </div>
    </div>
  );
}

import React from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
    const navigate = useNavigate();

    return (
          <div style={{ textAlign: "center", marginTop: "80px" }}>
      <h1>404 - Halaman Tidak Ditemukan</h1>
      <p>Sepertinya kamu tersesat...</p>
      <button
        onClick={() => navigate("/")}
        style={{ marginTop: "20px", padding: "10px 20px" }}
      >
        Kembali ke Home
      </button>
    </div>
    )
}
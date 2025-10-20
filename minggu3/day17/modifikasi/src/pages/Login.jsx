import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, useLocation } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username.trim() || !password.trim()) {
      alert("Masukkan username & password.");
      return;
    }

    login({ username });

    navigate("/", { replace: true });
  };

  return (
    <div style={{ maxWidth: 420, margin: "60px auto", padding: 20 }}>
        <h1 style={{textAlign: "center", }}>🛒 Shopping Market</h1>
        <br />
        <br />
      <h2 style={{ textAlign: "center" }}>Login</h2>
      <form onSubmit={handleSubmit} style={{ display: "grid", gap: 12 }}>
        <label>
          Username
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="username"
            style={{ width: "100%", padding: 8, marginTop: 6 }}
          />
        </label>

        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
            style={{ width: "100%", padding: 8, marginTop: 6 }}
          />
        </label>

        <button type="submit" style={{ padding: "10px 12px", marginTop: 6 }}>
          Login & Go to Home
        </button>
      </form>

      <p style={{ marginTop: 14, color: "#666", fontSize: 14 }}>
        Tips: cukup isi username & password lalu tekan Login.
      </p>
    </div>
  );
}

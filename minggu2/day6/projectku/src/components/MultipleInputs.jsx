import React, { useState } from "react";

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!formData.email.includes("@")) {
      setError("Email harus ada '@'");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password harus minimal 6 karakter");
      return;
    }

    setSuccess(`Pendaftaran berhasil! Selamat datang, ${formData.username}`);
    console.log("Data terdaftar:", formData);
  };

  const containerStyle = {
    width: "300px",
    margin: "30px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    textAlign: "center"
  };

  const inputStyle = {
    width: "90%",
    padding: "8px",
    margin: "6px 0",
    borderRadius: "4px",
    border: "1px solid #ccc"
  };

  const buttonStyle = {
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    padding: "8px 16px",
    borderRadius: "5px",
    cursor: "pointer"
  };

  const errorStyle = { color: "red", fontSize: "15px" };
  const successStyle = { color: "green", fontSize: "15px" };

  return (
    <div style={containerStyle}>
      <h2>Formulir Pendaftaran</h2>
      <form onSubmit={handleSubmit}>
        <input
          style={inputStyle}
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
        />
        <input
          style={inputStyle}
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          style={inputStyle}
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <button type="submit" style={buttonStyle}>Daftar</button>
      </form>

      {error && <p style={errorStyle}>{error}</p>}
      {success && <p style={successStyle}>{success}</p>}
    </div>
  );
}

import React, { useState } from "react";
import axios from "axios";

export default function FetchUserAxios() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUser = () => {
    setLoading(true);
    setError(null);
    setUser(null);

    axios
      .get("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => {
        setUser(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Gagal mengambil data!");
        setLoading(false);
      });
  };

  return (
    <div>
      <h2>Data Pengguna</h2>
      <button onClick={fetchUser}>Ambil Data</button>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {user && (
        <div>
          <h3>Hasil Data:</h3>
          <p><strong>Nama:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Telepon:</strong> {user.phone}</p>
        </div>
      )}
    </div>
  );
}

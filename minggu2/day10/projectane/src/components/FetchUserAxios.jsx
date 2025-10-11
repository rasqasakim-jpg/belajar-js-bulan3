import React, { useEffect, useState } from "react";
import axios from "axios";

export default function FetchUserAxios() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => {
        setUser(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []); 

  if (loading) {
    return <p>Loading data...</p>;
  }

  return (
    <div>
      <h2>Data Pengguna (Axios)</h2>
      {user ? (
        <div>
          <p><strong>Nama:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Telepon:</strong> {user.phone}</p>
        </div>
      ) : (
        <p>Data tidak tersedia</p>
      )}
    </div>
  );
}

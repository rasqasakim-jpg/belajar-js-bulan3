import React, { useState, useEffect } from "react";

export default function SimulatedFetch() {
  const [data, setData] = useState(null); // Data hasil 'fetch'
  const [loading, setLoading] = useState(true); // Status loading

  useEffect(() => {
    console.log("Mulai fetch data...");

    setTimeout(() => {
      const fakeData = {
        name: "John Doe",
        email: "johndoe@example.com",
        message: "Data berhasil diambil",
      };

      setData(fakeData);
      setLoading(false);
      console.log("Data sudah diterima");
    }, 2000);
  }, []); 

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Simulasi Fetch Data</h2>

      {loading ? (
        <p> Loading data...</p>
      ) : (
        <div>
          <p>Nama: {data.name}</p>
          <p>Email: {data.email}</p>
          <p>Pesan: {data.message}</p>
        </div>
      )}
    </div>
  );
}

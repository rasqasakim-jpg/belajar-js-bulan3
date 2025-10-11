import React, { useEffect, useState } from "react";

export default function FetchUserAbort() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController(); 
    const signal = controller.signal;

    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/users/1", { signal })
      .then((response) => {
        if (!response.ok) throw new Error("Gagal fetch");
        return response.json();
      })
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("Fetch dibatalkan");
        } else {
          setError("Terjadi kesalahan");
          setLoading(false);
        }
      });

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div>
      <h2>Fetch dengan AbortController</h2>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {user && (
        <div>
          <p><strong>Nama:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </div>
      )}
    </div>
  );
}

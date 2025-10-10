import React, { useState, useEffect } from "react";

export default function UserInfo() {
  const [userId, setUserId] = useState(1);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    setUserData(null); 
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response) => response.json())
      .then((data) => {
        setUserData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [userId]); 

  const nextUser = () => {
    setUserId((prev) => (prev >= 10 ? 1 : prev + 1)); // reset ke 1 jika lebih dari 10
  };

  return (
    <div>
      <h2>Data Profil Pengguna</h2>

      {userData ? (
        <div>
          <p><strong>Nama:</strong> {userData.name}</p>
          <p><strong>Email:</strong> {userData.email}</p>
        </div>
      ) : (
        <p>Sedang mengambil data...</p>
      )}

      <button onClick={nextUser}>
        User Berikutnya (ID: {userId})
      </button>
    </div>
  );
}

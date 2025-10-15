import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function UserProfile() {
  const { user } = useContext(UserContext);

  if (!user.isLoggedIn) {
    return <p> User belum login</p>;
  }

  return (
    <div>
      <h2> Profil Pengguna</h2>
      <p>Nama: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}

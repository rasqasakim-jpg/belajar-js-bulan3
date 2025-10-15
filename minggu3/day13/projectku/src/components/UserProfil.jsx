import React from "react";
import { useUserContext } from "../hooks/useUserContext";

export default function UserProfil() {
  const { user } = useUserContext();

  return (
    <div>
      <h2>Profil Pengguna</h2>
      <p>Nama: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Status: {user.isLoggedIn ? "Logged In" : "Guest"}</p>
    </div>
  );
}

import React from "react";
import { useUserContext } from "../hooks/useUserContext";

export default function AuthButton() {
  const { login, logout, user } = useUserContext();

  return (
    <div>
      {!user.isLoggedIn ? (
        <button onClick={() => login("Ucup gentolet", "cuphub@example.com")}>
          Login
        </button>
      ) : (
        <button onClick={logout}>Logout</button>
      )}
    </div>
  );
}

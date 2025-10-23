import React, { useContext } from "react";
import { UserContext } from "../components/UserContext";

export default function Home() {
  const context = useContext(UserContext);
  if (!context) return <p>Context not found</p>;

  const { user, login, logout } = context;

  return (
    <div>
      <h1>Welcome {user ? user.name : "Guest"}</h1>
      {user ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <button onClick={() => login("Dinda", "dinda@mail.com")}>Login</button>
      )}
    </div>
  );
}

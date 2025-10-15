import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function AuthButtons() {
  const { user, login, logout, updateProfile } = useContext(UserContext);

  return (
    <div>
      {!user.isLoggedIn ? (
        <button onClick={() => login("Ucup", "ucup@example.com")}>
           Login
        </button>
      ) : (
        <>
          <button onClick={() => updateProfile("xena starboy", "xena@example.com")}>
             Update Profile
          </button>
          <button onClick={logout}> Logout</button>
        </>
      )}
    </div>
  );
}

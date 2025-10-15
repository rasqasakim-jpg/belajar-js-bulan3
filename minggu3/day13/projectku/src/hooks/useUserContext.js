import { useContext } from "react";
import { UserContext } from "../context/UserContext1";

export const useUserContext = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useUserContext must be used within a UserProvider");
  }

  return context;
};

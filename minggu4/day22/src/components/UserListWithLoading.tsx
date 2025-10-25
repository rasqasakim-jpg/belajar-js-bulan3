import React, { useState, useEffect } from "react";
import UserList from "./UserList";
import { withLoading } from "../hoc/withLoading";

const UserListWithLoading = withLoading(UserList);

const UserListContainer: React.FC = () => {
  const [users, setUsers] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setUsers(["Kahfi", "Marko", "Zidan", "Ucup"]);
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h2>HOC: withLoading</h2>
      <UserListWithLoading loading={loading} users={users} />
    </div>
  );
};

export default UserListContainer;

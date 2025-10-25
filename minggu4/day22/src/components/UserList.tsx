import React from "react";

interface UserListProps {
  users: string[];
}

const UserList: React.FC<UserListProps> = ({ users }) => {
  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {users.map((user, i) => (
        <li key={i}>👤 {user}</li>
      ))}
    </ul>
  );
};

export default UserList;

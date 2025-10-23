import React from "react";

interface UserCardProps {
  name: string;
  age: number;
  isOnline: boolean;
}

const UserCard: React.FC<UserCardProps> = ({ name, age, isOnline }) => {
  return (
    <div className="user-card">
      <h3>{name}</h3>
      <p>Age: {age}</p>
      <p className={isOnline ? "online" : "offline"}>
        {isOnline ? "Online " : "Offline "}
      </p>
    </div>
  );
};

export default UserCard;

import Avatar from "./Avatar.jsx";

export default function UserInfo({ user }) {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Avatar src={user.avatarUrl} alt={user.name} />
      <span style={{ fontWeight: "bold" }}>{user.name}</span>
    </div>
  );
}

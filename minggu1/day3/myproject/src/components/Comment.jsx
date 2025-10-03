import UserInfo from "./UserInfo.jsx";
import CommentText from "./CommentText.jsx";

export default function Comment({ user, text }) {
  return (
    <div style={{
      border: "1px solid #ddd",
      padding: "10px",
      borderRadius: "8px",
      marginBottom: "12px",
      maxWidth: "300px"
    }}>
      <UserInfo user={user} />
      <CommentText text={text}
      

       />
    </div>
  );
}

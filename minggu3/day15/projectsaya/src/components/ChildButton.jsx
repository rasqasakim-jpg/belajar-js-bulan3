import React from "react";

function ChildButton({ onClick }) {
  console.log("🟡 ChildButton Rendered");
  return (
    <button onClick={onClick}>
      Klik Child Button
    </button>
  );
}

export default React.memo(ChildButton);

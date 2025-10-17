import React, { useState } from "react";
import ChildButton from "./ChildButton";

export default function ParentWithoutCallback() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    console.log("❌ Fungsi TANPA useCallback dipanggil");
  };

  console.log("🔴 ParentWithoutCallback Rendered");

  return (
    <div style={{ border: "1px solid black", padding: "10px" }}>
      <h3>❌ Tanpa useCallback</h3>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Tambah Count</button>
      <ChildButton onClick={handleClick} />
    </div>
  );
}

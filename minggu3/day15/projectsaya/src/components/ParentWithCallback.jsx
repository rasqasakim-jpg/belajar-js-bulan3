import React, { useState, useCallback } from "react";
import ChildButton from "./ChildButton";

export default function ParentWithCallback() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("✅ Fungsi DENGAN useCallback dipanggil");
  }, []); 

  console.log("🟢 ParentWithCallback Rendered");

  return (
    <div style={{ border: "1px solid black", padding: "10px" }}>
      <h3>✅ Dengan useCallback</h3>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Tambah Count</button>
      <ChildButton onClick={handleClick} />
    </div>
  );
}

import React from "react";

export default function SlowComponent() {
  console.log("🐢 SlowComponent rendered");

  let heavy = 0;
  for (let i = 0; i < 200000000; i++) {
    heavy += i;
  }

  return <h3>🐢 Komponen Lambat — Hasil: {heavy}</h3>;
}

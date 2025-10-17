import React, { useMemo } from "react";

export default function MediumComponent() {
  console.log("⏳ MediumComponent rendered");

  const result = useMemo(() => {
    let sum = 0;
    for (let i = 0; i < 1000000; i++) {
      sum += i;
    }
    return sum;
  }, []);

  return <h3>⏳ Komponen Sedang — Hasil: {result}</h3>;
}

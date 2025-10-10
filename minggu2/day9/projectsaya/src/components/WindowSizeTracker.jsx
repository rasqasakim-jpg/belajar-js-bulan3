import React, { useState, useEffect } from "react";

export default function WindowSizeTracker() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    console.log("Event listener ditambahkan ");

    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("Event listener dibersihkan ");
    };
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Ukuran Jendela Browser</h2>
      <p>Lebar: {windowSize.width}px</p>
      <p>Tinggi: {windowSize.height}px</p>
    </div>
  );
}

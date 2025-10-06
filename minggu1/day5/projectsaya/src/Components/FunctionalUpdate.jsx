import React, {useState} from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount((prev) => prev +1 );
    };

    const decrement = () => {
        setCount((prev) => prev -1 );
    };

    const addThreeTimes = () => {
        setCount((prev) => prev + 1);
        setCount((prev) => prev + 1);
        setCount((prev) => prev + 1);
    };

    return (
        <main style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "arial"
        }}
    >
        <h1>Aplikasi Counter (Functioanal Update )</h1>
        <p style={{fontSize: "20px"}}>Jumlah: {count}</p>

        <div>
            <button onClick={decrement} 
            style={{padding: "5px 10px", margin: "5px"}}
            >
                Kurang
            </button>
            <button onClick={increment} 
            style={{padding: "5px 10px", margin: "5px"}}
            >
                Tambah
            </button>
        </div>
             <button
        onClick={addThreeTimes}
        style={{
          marginTop: "10px",
          padding: "6px 12px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Tambah 3 Kali Sekaligus
      </button>
        </main>
    )
}
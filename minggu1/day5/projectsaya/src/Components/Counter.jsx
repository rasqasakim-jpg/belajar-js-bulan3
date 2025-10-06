import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <main style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
      <h1>Aplikasi Counter Sederhana</h1>

      <p>Jumlah Counter: {count}</p>

    <div>
      <button onClick={decrement}>-</button>
      <input 
        type="text"
        value={count}
        onChange={(event) => {
            setCount(event.target.value)
        }}
      />
      
    <button onClick={increment}>+</button>
    </div>    
    </main>
  )
} 
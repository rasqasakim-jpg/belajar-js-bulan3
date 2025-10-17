import React, { useState } from "react";
import Child from "./Child";

export default function Parent() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");

    console.log("parent component rendered");

    return (
        <div style={{padding: "20px", border: "1px solid black"}}>
            <h1>implementasi React.memo</h1>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}> tambah count</button>
            <hr />

            <input 
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ketik namamu..."
            />
            <Child name={name}/>
        </div>
    );
}

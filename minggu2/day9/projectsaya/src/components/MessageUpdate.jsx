import React, { useState, Effect, useEffect} from "react";
 
export default function MessageUpdate() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("komponen dirender atau diperbarui");
    });

    return (
        <div>
            <h2>Komponen Update</h2>
            <p>count: {count}</p>
            <button onClick={() => setCount(count + 1)}>
                Tambah
            </button>
        </div>
    )
}


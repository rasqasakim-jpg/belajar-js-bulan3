import React, {useState, useMemo, use} from "react";

export default function ExpensiveCalculation() {
    const [number, setNumber] = useState(1);
    const [count, setCount] = useState(0);

    const ExpensiveResult = useMemo(() => {
        console.log("perhitungan berat dijalankan..");
        let total = 0;
        for (let i = 0; i < 100000000; i++) {
            total += number * 2;
        }
        return total;
    }, [number]);

    return (
        <div style={{padding: "20px"}}>
            <h2>Optimasi dengan useMemo</h2>

            <p><strong>Hasil perhitungan berat</strong>{ExpensiveResult}</p>

            <input 
            type="text" 
            value={number}
            onChange={(e) => setNumber(parseInt(e.target.value))}
            />
            <hr />

            <p><strong>Counter:</strong>{count}</p>
            <button onClick={() => setCount(count + 1)}>Tambah</button>
        </div>
    );
}
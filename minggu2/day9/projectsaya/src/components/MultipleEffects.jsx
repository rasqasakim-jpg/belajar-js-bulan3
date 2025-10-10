import React, {useState, useEffect} from "react";

export default function MultipleEffects() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");

    useEffect(() => {
        document.title = `Count: ${count}`;
        console.log("count berbuah ke:", count);
    }, [count]);

    useEffect(() => {
        console.log("nama berbuah ke", name);
    }, [name]);

    return (
        <div style={{textAlign: "center", marginTop: "20px"}}>
            <h2>Multiple useEffect</h2>

            <div>
                <p>count: {count}</p>
                <button onClick={() => setCount((prev) => prev + 1)}>
                    Tambah count
                </button>
            </div>

            <div style={{marginTop: "20px"}}>
                <input 
                    type="text" 
                    placeholder="Ktik namamu..."
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <p>Nama saat ini: {name}</p>
            </div>
        </div>
    )
}
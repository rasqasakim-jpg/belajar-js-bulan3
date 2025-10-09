import React, {useState} from "react";

export default function ControlledComponent() {
    const [name, setName] = useState("");

    const handleChange = (e) => {
        setName(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Halo ${name} selamat datang`);
    };

    return (
        <div style={{textAlign: "center", marginTop: "50px"}}>
            <h2>Formulir Sederhana</h2>
            <form onSubmit={handleSubmit}>
                <input 
                type="text" 
                placeholder="Masukkan namamu"
                value={name}
                onChange={handleChange}
                style={{
                    padding: "8px",
                    borderRadius: "5px",
                    border: "1px solid gray",
                    marginRight: "8px"
                }}
                />
                <button type="submit">Kirim</button>
            </form>
            <p>Namamu:<strong>{name}</strong></p>
        </div>
    );
}
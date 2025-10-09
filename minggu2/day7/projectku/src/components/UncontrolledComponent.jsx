import React, {useRef} from "react";

export default function UncontrolledForm() {
    const nameRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        const nameValue = nameRef.current.value;
        alert(`Halo ${nameValue} form berhasil dikirim`);
    };

    return (
        <div style={{textAlign: "center", marginTop: "50px"}}>
            <h2>Formulir Sederhana Uncontrolled</h2>
            <form onSubmit={handleSubmit}>
                <input 
                type="text" 
                placeholder="Masukkan namamu"
                ref={nameRef}
                style={{
                    padding: "8px",
                    borderRadius: "5px",
                    border: "1px solid gray",
                    marginRight: "8px"
                }}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}


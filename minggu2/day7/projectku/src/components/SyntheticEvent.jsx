import React, {useState} from "react";

export default function SyntheticEvent() {
    const [text, setText] = useState("");

    const handleLinkClick = (e) => {
        e.preventDefault();
        console.log("link diklik tapi navigasi dicegah!");
        alert("anda mencoba mengklik link, tapi saya menghalanginya!")
    };

    const handleInputChange = (e) => {
        setText(e.target.value);
        console.log("isi input sekarang: ", e.target.value);    
    };

    return (
        <div style={{textAlign: "center", marginTop: "50px"}}>
            <h2>Synthetic Event</h2>
        <a 
        href="https://google.com"
        onClick={handleLinkClick}
        style={{display: "block", marginBottom: "20px"}}
        >
            Klik link ini
        </a>
        <input
        type="text"
        value={text}
        onChange={handleInputChange}
        placeholder="ketik sesuatu"
        style={{padding: "8px", borderRadius: "5px", border: "1px solid gray"}}
        />
        <p>isi:{text}</p>
        </div>
    );

}
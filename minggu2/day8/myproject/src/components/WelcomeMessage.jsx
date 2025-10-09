import React, {useState} from "react";

export default function WelcomeMessage() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [newMessage, setNewMessage] = useState(1);

    return (
        <div style={{textAlign: "center", padding: "20px"}}>
            <h2>Rumah IT</h2>

            <p>
                {isLoggedIn
                ? "Selamat Datang Kembali"
                : "Silahkan Login Untuk Melanjutkan"
                }
            </p>

            {isLoggedIn && newMessage > 0 && (
                <p>Kamu Memiliki {newMessage} Pesan Baru</p>
            )}

            <div style={{marginTop: "10px"}}>
                <button
                    onClick={() => setIsLoggedIn(!isLoggedIn)}
                    style={{
                        padding: "8px 16px",
                        borderRadius: "5px",
                        cursor: "pointer",
                        marginRight: "8px"
                    }}
                >
                    {isLoggedIn ? "Logout" : "Login"}
                </button>

                <button
                    onClick={() => setNewMessage(newMessage + 1)}
                    style={{padding: "8px 16px", borderRadius: "5px", cursor: "pointer"}}
                >
                    Tambah Pesan
                </button>
            </div>
        </div>
    )
}
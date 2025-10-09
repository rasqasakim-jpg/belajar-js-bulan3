import React, {useState} from "react";

export default function LoginStatus() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    let message;
    if (isLoggedIn) {
        message = <p>Selamat Datang Boss</p>;
    } else {
        message = <p>Silahkan Login Dulu</p>;
    }

    return (
        <div style={{textAlign: "center", padding: "20px"}}>
            {message}
            <button onClick={() => setIsLoggedIn(!isLoggedIn)}
                style={{
                    padding: "8px 16px",
                    marginTop: "10px",
                    borderRadius: "5px",
                    cursor: "pointer"
                }}>
                {isLoggedIn ? "Logout" : "Login"}
            </button>
        </div>
    )


}
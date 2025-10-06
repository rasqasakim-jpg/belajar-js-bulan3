import { use } from "react";
import { useState } from "react";

function UserProfile() {
    const [name, setName] = useState("Isi Nama");
    const [age,setAge] = useState(0);
    const [isEditing, setIsEditing] = useState(false);

    return (
        <div>
            <h2>Profil Pengguna</h2>
            {isEditing ? (
              <div>
                <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
                <br /><br />
                <input
                type="number"
                value={age}
                onChange={(e) => setAge(Number(e.target.value))}
                />
                <br /><br />
                <button onClick={() => setIsEditing(false)}>Simpan</button>
                </div>
            ):(
                <div>
                    <p>Nama: {name}</p>
                    <p>Umur: {age}</p>
                    <button onClick={() => setIsEditing(true)}>Edit</button>
                </div>
            )}
        </div>
    );
}
export default UserProfile
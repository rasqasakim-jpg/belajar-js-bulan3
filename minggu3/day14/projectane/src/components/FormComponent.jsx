// src/components/FormComponent.jsx
import React from "react";
import useForm from "../hooks/useForm";

export default function FormComponent() {
    const [values, handleChange] = useForm({ nama: "", email: "" });

    return (
        <div style={{ textAlign: "center" }}>
            <h2>Form dengan Custom Hook</h2>
            <input
                type="text"
                name="nama"
                placeholder="Masukkan Nama"
                value={values.nama}
                onChange={handleChange}
                style={{ margin: "5px" }}
            />
            <br />
            <input
                type="email"
                name="email"
                placeholder="Masukkan Email"
                value={values.email}
                onChange={handleChange}
                style={{ margin: "5px" }}
            />
            <h3>Preview Data:</h3>
            <p>Nama: {values.nama}</p>
            <p>Email: {values.email}</p>
        </div>
    );
}

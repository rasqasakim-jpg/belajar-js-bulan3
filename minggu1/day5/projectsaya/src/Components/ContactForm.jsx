import React, { useState } from "react";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        console.log("Data yang disubmit:", formData);
        alert(`Terima Kasih, ${formData.firstName}! Data anda telah disubmit`)
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Formulir Kontak</h2>
            <div>
                <label>Nama Depan:</label>
                <input 
                type="text" 
                name="firstName" 
                value={formData.firstName} 
                onChange={handleChange} 
                />
            </div>
            <br />
                 <div>
                <label>Nama Belakang:</label>
                <input 
                type="text" 
                name="lastName" 
                value={formData.lastName} 
                onChange={handleChange} 
                />
            </div>
            <br />
                <div>
                <label>Email:</label>
                <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                />
            </div>
            <br />
            <button type="submit">Submit</button>
            <p>Current Data: {JSON.stringify(formData)}</p>
        </form>
    );
}
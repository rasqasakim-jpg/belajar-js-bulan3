import React from "react";
import waLogo from "../assets/wa.png"; // logo WhatsApp
import igLogo from "../assets/ig.png"; // logo Instagram

export default function Contact() {
  const phoneNumber = "6281334362970";
  const instagram = "https://www.instagram.com/irgiharnoyoo/";

  return (
    <div className="contact-page">
      <h1 className="page-title">Kontak Saya</h1>
      <p>Silakan hubungi saya melalui:</p>

      <div className="contact-icons">
        <a href={`https://wa.me/${phoneNumber}`} target="_blank" rel="noopener noreferrer">
          <img src={waLogo} alt="WhatsApp" className="icon" />
        </a>
        <a href={instagram} target="_blank" rel="noopener noreferrer">
          <img src={igLogo} alt="Instagram" className="icon" />
        </a>
      </div>
    </div>
  );
}

import React from "react";
import logo from "../assets/react.svg";


export default function About() {
  return (
    <div>
      <h1 className="page-title">Tentang Aplikasi</h1>
      <div className="about-section">
        <img 
          src={logo} 
          alt="Logo Aplikasi" 
          className="about-image"
        />
        <p>
          Selamat datang di <strong>Application React Router</strong>!  
          Aplikasi ini dibuat sebagai contoh proyek React modern dengan navigasi multi-halaman, tampilan produk, 
          dan dashboard yang rapi. Kamu bisa melihat daftar produk, membuka detail produk, 
          dan menjelajahi dashboard dengan halaman Profil dan Pengaturan.
        </p>
        <h2>Fitur:</h2>
        <ul>
          <li>Navigasi multi-halaman menggunakan React Router</li>
          <li>Daftar produk dari API real-time</li>
          <li>Halaman detail produk</li>
          <li>Dashboard dengan halaman Profil & Pengaturan</li>
          <li>Desain modern dan responsif</li>
        </ul>
      </div>
    </div>
  );
}

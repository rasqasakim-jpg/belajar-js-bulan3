import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { UserProvider } from "./components/UserContext";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Exercise from "./pages/Exercise";
import "./App.css";

export default function App() {
  return (
    <UserProvider>
      <div className="app-container">
        <h1>Soal 2 - 4:</h1>
        <nav className="navbar">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/exercise">Exercise</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/exercise" element={<Exercise />} />
        </Routes>
      </div>
    </UserProvider>
  );
}

import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../App.css";

export default function Navbar() {
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();

  const handleNavClick = (e, path) => {
    if (!isAuthenticated) {
      e.preventDefault();
      alert("Silakan login untuk mengakses halaman ini");
      navigate("/login");
    }
  };

  const handleLogout = () => {
    logout();
    navigate("/login", { replace: true });
  };

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div className="brand">Application React Router</div>

        <ul className="nav-links">
          <li>
            <NavLink to="/" onClick={(e) => handleNavClick(e, "/")}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={(e) => handleNavClick(e, "/about")}>About</NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={(e) => handleNavClick(e, "/contact")}>Contact</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/profile" onClick={(e) => handleNavClick(e, "/dashboard/profile")}>Dashboard</NavLink>
          </li>
        </ul>

        <div className="auth-section">
          {isAuthenticated ? (
            <>
              <span className="username">{user?.username}</span>
              <button className="logout-btn" onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <NavLink to="/login" className="login-btn">Login</NavLink>
          )}
        </div>
      </div>
    </nav>
  );
}

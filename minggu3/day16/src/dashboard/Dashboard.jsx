import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <div>
      <h1 className="page-title">Dashboard</h1>
      <div className="dashboard-nav">
        <NavLink to="profile">Profile</NavLink>
        <NavLink to="settings">Settings</NavLink>
      </div>
      <Outlet />
    </div>
  );
}

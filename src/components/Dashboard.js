import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      navigate("/login");
    } catch {
      setError("Failed to log out.");
    }
  }

  return (
    <div className='dashboard-container'>
      <div className='dashboard'>
        <div className='profile'>
          <h2>Profile</h2>
          {error && (
            <div className='profile-error'>
              <h2>{error}</h2>
            </div>
          )}
          <strong>Email:</strong> {currentUser.email}
          <button onClick={handleLogout}>Log Out</button>
        </div>
        <div>
          <Link to='/update-profile'>Update profile</Link>
        </div>
      </div>
    </div>
  );
}

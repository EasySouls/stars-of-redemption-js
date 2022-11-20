import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";

export default function Profile() {
  const [error, setError] = useState("");
  const { currentUser } = useAuth();

  function handleLogout() {}

  return (
    <div className='profile'>
      <h2>Profile</h2>
      {error && (
        <div className='sign-up-error'>
          <h2>{error}</h2>
        </div>
      )}
      <strong>Email:</strong> {currentUser.email}
      <button onClick={handleLogout}>Log Out</button>
    </div>
  );
}

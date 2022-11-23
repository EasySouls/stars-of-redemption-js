import React, { useRef, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  const emailRef = useRef();

  const { resetPasword } = useAuth();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPasword(emailRef.current.value);
      setMessage("Check your inbox for further instructions!");
    } catch {
      setError("Failed to reset password");
    }

    setLoading(false);
  }

  return (
    <div className='login'>
      <h1>Password reset</h1>
      {error && (
        <div className='login-error'>
          <h2>{error}</h2>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <br />
        <input type='email' ref={emailRef} />
        <br />
        <button type='submit' disabled={loading}>
          Reset password
        </button>
      </form>
      <div>
        <Link to='/stars-of-redemption/login'>Login</Link>
      </div>
      <div>
        Need an account?
        <Link to='/stars-of-redemption/signup'>Sign Up</Link>
      </div>
    </div>
  );
}

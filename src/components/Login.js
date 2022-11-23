import React, { useRef, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();

  const { login } = useAuth();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate("/stars-of-redemption");
    } catch {
      setError("Failed to log in");
    }

    setLoading(false);
  }

  return (
    <div className='login'>
      <h1>Login</h1>
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
        <label>Password</label>
        <br />
        <input type='password' ref={passwordRef} />
        <br />
        <button type='submit' disabled={loading}>
          Login
        </button>
      </form>
      <div>
        <Link to='/stars-of-redemption/forgot-password'>Forgot password?</Link>
      </div>
      <div>
        Need an account?
        <Link to='/stars-of-redemption/signup'>Sign Up</Link>
      </div>
    </div>
  );
}

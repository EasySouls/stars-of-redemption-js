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
      navigate("/");
    } catch {
      setError("Failed to log in");
    }

    setLoading(false);
  }

  return (
    <div className='login-container'>
      <div className='login'>
        <h1>Login</h1>
        {error && (
          <div className='login-error'>
            <h2>{error}</h2>
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <input type='email' ref={emailRef} placeholder='Email' />
          <br />
          <input type='password' ref={passwordRef} placeholder='Password' />
          <br />
          <button type='submit' disabled={loading}>
            Login
          </button>
        </form>
        <div>
          <Link to='/forgot-password'>Forgot password?</Link>
        </div>
        <div>
          Need an account?
          <Link to='/signup'>Sign Up</Link>
        </div>
      </div>
    </div>
  );
}

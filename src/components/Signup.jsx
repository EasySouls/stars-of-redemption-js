import React, { useRef, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  const { signup } = useAuth();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match!");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      navigate("/");
    } catch {
      setError("Failed to create an account");
    }

    setLoading(false);
  }

  return (
    <div className='sign-up-container'>
      <div className='sign-up'>
        <h1>Sign Up</h1>
        {error && (
          <div className='sign-up-error'>
            <h2>{error}</h2>
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <input type='email' ref={emailRef} required placeholder='Email' />
          <br />
          <br />
          <input
            type='password'
            ref={passwordRef}
            required
            placeholder='Password'
          />
          <br />
          <input
            type='password'
            ref={passwordConfirmRef}
            required
            placeholder='Password confirmation'
          />
          <br />
          <button type='submit' disabled={loading}>
            Sign Up
          </button>
        </form>
        <div>
          Already have an account?
          <Link to='/login'>Login</Link>
        </div>
      </div>
    </div>
  );
}

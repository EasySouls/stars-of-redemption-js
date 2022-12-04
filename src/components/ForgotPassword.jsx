import React, { useRef, useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  const emailRef = useRef();

  const { resetPassword } = useAuth();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const handler = (e) => {
      const key = e.key;

      if (key != "Enter") return;
      e.preventDefault();
      handleSubmit(e);
    };

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("Check your inbox for further instructions!");
    } catch (error) {
      setError("Failed to reset password");
    }

    setLoading(false);
  }

  return (
    <div className='flex flex-row h-full w-full'>
      <div className='w-1/2 bg-primary-dark'></div>
      <div className='w-1/2 text-center flex flex-col items-center justify-center'>
        <h1 className='text-2xl lg:text-[2.5rem] mb-3 font-bold'>
          Password reset
        </h1>
        {error && (
          <div className='text-primary'>
            <h2>{error}</h2>
          </div>
        )}
        {message && (
          <div className='text-secondary'>
            <h2>{message}</h2>
          </div>
        )}
        <label className='text-xs lg:text-base m-2 font-bold'>
          Enter your email
        </label>
        <input
          type='email'
          ref={emailRef}
          placeholder='email@email.com'
          className='w-3/4 max-w-md mb-3 text-xs lg:text-base border rounded border-gray-400'
        />
        <button
          type='button'
          onClick={handleSubmit}
          disabled={loading}
          className='w-3/4 max-w-md h-10 text-base text-white bg-primary border-primary rounded-lg'
        >
          Reset password
        </button>
        <div className='m-3'>
          <Link to='/login' className='font-semibold'>
            Login
          </Link>
        </div>
        <div className='w-3/4 max-w-md flex flex-row justify-center'>
          <p className='px-2'>Need an account?</p>
          <Link to='/signup' className='font-semibold'>
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}

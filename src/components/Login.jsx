import React, { useRef, useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();

  const { login } = useAuth();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

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
    <div className='flex flex-row h-full w-full'>
      <div className='w-1/2 bg-primary-dark'></div>
      <div className='w-1/2 text-center flex flex-col items-center justify-center'>
        <h1 className='text-2xl lg:text-[2.5rem] mb-3 font-bold'>Log in</h1>
        <p className='text-sm lg:text-base text-secondary-light mb-6'>
          Enter your details to continue
        </p>
        {error && (
          <div className=''>
            <h2>{error}</h2>
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
        <label className='text-xs lg:text-base m-2 font-bold'>
          Enter your password
        </label>
        <input
          type='password'
          ref={passwordRef}
          placeholder='******'
          className='w-3/4 max-w-md mb-3 text-xs lg:text-base border rounded border-gray-400'
        />
        <div className='flex w-3/4 max-w-md flex-row justify-between items-center m-3'>
          <div>
            <input
              type='checkbox'
              className='text-primary border border-primary accent-primary appearance-none'
            />
            <p className='inline mx-2'>Remember me</p>
          </div>
          <Link to='/forgot-password' className='text-primary'>
            Forgot password?
          </Link>
        </div>
        <button
          type='button'
          onClick={handleSubmit}
          disabled={loading}
          className='w-3/4 max-w-md h-10 text-base text-white bg-primary border-primary rounded-lg'
        >
          Login
        </button>
        <div className='w-3/4 max-w-md mt-6 flex flex-row justify-center'>
          <p className='px-2'>I don't have an account.</p>
          <Link to='/signup' className='font-semibold'>
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}

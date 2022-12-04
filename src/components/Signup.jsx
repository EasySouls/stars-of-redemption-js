import React, { useRef, useState, useEffect } from "react";
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
    <div className='flex flex-row h-full w-full'>
      <div className='w-1/2 bg-primary-dark'></div>
      <div className='w-1/2 text-center flex flex-col items-center justify-center'>
        <h1 className='text-2xl lg:text-[2.5rem] mb-3 font-bold'>Sign Up</h1>
        <p className='text-sm lg:text-base text-secondary-light mb-6'>
          Enter your details to continue
        </p>
        {error && (
          <div className='text-primary'>
            <h2>{error}</h2>
          </div>
        )}
        <label className='text-xs lg:text-base m-2 font-bold'>
          Enter your email
        </label>
        <input
          type='email'
          ref={emailRef}
          required
          placeholder='email@email.com'
          className='w-3/4 max-w-md mb-3 text-xs lg:text-base border rounded border-gray-400'
        />
        <label className='text-xs lg:text-base m-2 font-bold'>
          Enter your password
        </label>
        <input
          type='password'
          ref={passwordRef}
          required
          placeholder='*****'
          className='w-3/4 max-w-md mb-3 text-xs lg:text-base border rounded border-gray-400'
        />
        <label className='text-xs lg:text-base m-2 font-bold'>
          Enter your password again
        </label>
        <input
          type='password'
          ref={passwordConfirmRef}
          required
          placeholder='*****'
          className='w-3/4 max-w-md mb-3 text-xs lg:text-base border rounded border-gray-400'
        />
        <button
          type='button'
          onClick={handleSubmit}
          disabled={loading}
          className='w-3/4 max-w-md h-10 mt-4 text-base text-white bg-primary border-primary rounded-lg'
        >
          Sign Up
        </button>
        <div className='w-3/4 max-w-md mt-6 flex flex-row justify-center'>
          <p className='px-2'>Already have an account?</p>
          <Link to='/login' className='font-semibold'>
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
}

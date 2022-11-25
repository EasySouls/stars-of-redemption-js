import React, { useRef, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

export default function UpdateProfile() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  const { currentUser, updatePasswordAPI, updateEmailAPI } = useAuth();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match!");
    }

    const promises = [];
    setLoading(true);
    setError("");

    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmailAPI(emailRef.current.value));
    }
    if (passwordRef.current.value) {
      promises.push(updatePasswordAPI(passwordRef.current.value));
    }

    Promise.all(promises)
      .then(() => {
        navigate("/dashboard");
      })
      .catch(() => {
        setError("Failed to update account");
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <div className='sign-up-cpntainer'>
      <div className='sign-up'>
        <h1>Update Profile</h1>
        {error && (
          <div className='sign-up-error'>
            <h2>{error}</h2>
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <label>Email:</label>
          <br />
          <input type='email' ref={emailRef} defaultValue={currentUser.email} />
          <br />
          <label>Password</label>
          <br />
          <input
            type='password'
            ref={passwordRef}
            placeholder='Leave blank to keep the same'
          />
          <br />
          <label>Password confirmation</label>
          <br />
          <input
            type='password'
            ref={passwordConfirmRef}
            placeholder='Leave blank to keep the same'
          />
          <button type='submit' disabled={loading}>
            Update
          </button>
        </form>
        <div>
          <Link to='/dashboard'>Cancel</Link>
        </div>
      </div>
    </div>
  );
}

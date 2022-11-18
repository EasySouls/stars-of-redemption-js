import React, { useRef } from "react";
import { useAuth } from "../contexts/AuthContext";

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  const { signup } = useAuth();

  function handleSubmit(e) {
    e.preventDefault();

    signup(emailRef.current.value, passwordRef.current.value);
  }

  return (
    <div className='sign-up'>
      <form>
        <label>Email:</label>
        <br />
        <input type='email' ref={emailRef} />
        <br />
        <label>Password</label>
        <br />
        <input type='password' ref={passwordRef} />
        <br />
        <label>Password confirmation</label>
        <br />
        <input type='password' ref={passwordConfirmRef} />
      </form>
      <button>Sign up</button>
    </div>
  );
}

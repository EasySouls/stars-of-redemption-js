import React from "react";
import loadingAnimation from "../assets/loadingAnimation.svg";

export default function LoadingScreen() {
  return (
    <div className='w-full h-full p-4'>
      <h2>Loading...</h2>
      <div className='w-4 h-4'>
        <img src={loadingAnimation} alt='loading animation' />
      </div>
    </div>
  );
}

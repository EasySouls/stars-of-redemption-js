import React from "react";

export default function ChangeThemeButton({ onClick, icon }) {
  return (
    <div className='relative w-12 h-12 m-2'>
      <button
        className='absolute top-0 border border-black cursor-pointer rounded w-12 h-12 z-10'
        onClick={onClick}
      />
      <img
        className='absolute top-0 p-[3]px w-full h-full z-20 pointer-events-none'
        alt='icon'
        src={icon}
      />
    </div>
  );
}

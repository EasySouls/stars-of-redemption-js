import React from "react";

export default function ChangeThemeButton({ onClick, icon }) {
  return (
    <div className='theme-icon-container'>
      <button className='change-theme-btn' onClick={onClick} />
      <img className='theme-icon' alt='icon' src={icon} />
    </div>
  );
}

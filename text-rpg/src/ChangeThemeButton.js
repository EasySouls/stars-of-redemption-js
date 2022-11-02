import React from "react";

export default function ChangeThemeButton({ onClick, theme }) {
  return (
    <button type='image' className='change-theme-btn' onClick={onClick}>
      {theme ? (
        <a href='https://www.flaticon.com/free-icons/sun' title='sun icons'>
          Sun icons created by Good Ware - Flaticon
        </a>
      ) : (
        <a href='https://www.flaticon.com/free-icons/moon' title='moon icons'>
          Moon icons created by Good Ware - Flaticon
        </a>
      )}
    </button>
  );
}

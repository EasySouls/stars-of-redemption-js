import React from "react";

export default function Tooltip({ left, top, message }) {
  const position = {
    left: left + "px",
    top: top + "px",
  };

  return (
    <div className='tooltip' style={position}>
      {message}
    </div>
  );
}

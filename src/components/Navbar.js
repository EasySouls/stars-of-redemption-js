import React from "react";
import NavButton from "./NavButton";

export default function Navbar() {
  return (
    <nav className='w-100 flex h-10 flex-initial'>
      <NavButton to='character-screen' />
      <NavButton to='adventure' />
      <NavButton to='encyclopedia' />
      <NavButton to='settings' />
      <NavButton to='menu' />
    </nav>
  );
}

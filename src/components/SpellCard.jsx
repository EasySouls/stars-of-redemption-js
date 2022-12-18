import React from "react";

export default function SpellCard({ spell }) {
  return (
    <div className='w-20 h-20 border border-black dark:border-white'>
      <h2>{spell.name}</h2>
      <img className='w-8 h-8' src={spell.icon} alt={`${spell}'s icon`} />
      <p>{spell.description}</p>
    </div>
  );
}

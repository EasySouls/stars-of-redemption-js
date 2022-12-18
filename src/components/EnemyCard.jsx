import React from "react";

export default function EnemyCard({ enemy, setSelected }) {
  function handleClick(e) {
    e.preventDefault();
    setSelected(enemy);
  }

  return (
    <button
      onClick={handleClick}
      className='w-10 h-16 lg:w-28 lg:h-40 2xl:w-40 2xl:h-60 p-3 m-3 border border-secondary dark:border-white rounded-lg'
    >
      <p className='text-primary'>{enemy.name}</p>
      <p className='level'>{enemy.level}</p>
      <p className='race'>{enemy.race}</p>
    </button>
  );
}

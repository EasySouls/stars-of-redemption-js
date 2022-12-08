import React from "react";

export default function EnemyCard({ enemy }) {
  return (
    <div className='w-[10rem] h-[15rem] p-3 m-3 border border-secondary dark:border-white rounded-lg'>
      <p className='text-primary'>{enemy.name}</p>
      <p className='level'>{enemy.level}</p>
      <p className='race'>{enemy.race}</p>
    </div>
  );
}

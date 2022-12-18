import React from "react";
import EnemyCard from "./EnemyCard";

export default function EnemyBattlePanel({
  currentEnemies,
  selected,
  setSelected,
}) {
  return (
    <div className='grid gap-4 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 grid-flow-row w-full h-full overflow-clip border border-black dark:border-white bg-white dark:bg-black'>
      <p>Enemies</p>
      {currentEnemies.map((enemy, id) => {
        return <EnemyCard key={id} enemy={enemy} setSelected={setSelected} />;
      })}
    </div>
  );
}

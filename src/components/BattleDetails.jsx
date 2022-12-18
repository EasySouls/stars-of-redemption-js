import React from "react";

export default function BattleDetails({ selected }) {
  return (
    <div className='w-full h-full border border-black dark:border-white bg-white dark:bg-black'>
      <h2>Battle Details</h2>
      {selected && <h2>{selected.name}</h2>}
    </div>
  );
}

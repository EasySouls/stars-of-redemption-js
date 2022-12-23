import React from "react";
import SpellCard from "../components/SpellCard";
import Character from "../classes/Character";
import Enemy from "../classes/Enemy";

export default function BattleDetails({ selected }) {
  return (
    <div className='w-full h-full border border-black dark:border-white bg-white dark:bg-black'>
      <h2>Battle Details</h2>
      {selected && <h2>{selected.name}</h2>}
      {selected instanceof Character &&
        selected.knownSpells.map((spell, idx) => {
          return <SpellCard spell={spell} key={idx} />;
        })}
      {selected instanceof Enemy && (
        <div>
          <p>Level: {selected.level}</p>
          <p>
            Hp: {selected.currentHp}/{selected.maxHp}
          </p>
        </div>
      )}
    </div>
  );
}

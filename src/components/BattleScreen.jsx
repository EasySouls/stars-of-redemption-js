import React, { useContext, useState } from "react";
import { CharacterContext } from "./App";
import EnemyCard from "./EnemyCard";
import Enemy from "../classes/Enemy";

export default function BattleScreen() {
  const { character, setCharacter } = useContext(CharacterContext);
  const [currentEnemies, setCurrentEnemies] = useState([]);

  // Logic for creating the separate encounters
  function createEncounter(level) {
    const nrOfEnemies = Math.floor(level * 0.5) + 1;
    let enemies = [];

    for (var i = 0; i < nrOfEnemies; i++) {
      const enemyLevel = Math.floor(Math.random() * level + 1);
      const enemyRaceRand = Math.floor(Math.random() * 4);
      let enemyRace = "";
      switch (enemyRaceRand) {
        case 0:
          enemyRace = "human";
          break;

        case 1:
          enemyRace = "elf";
          break;

        case 2:
          enemyRace = "dwarf";
          break;

        case 3:
          enemyRace = "half-elf";
      }

      let enemy = new Enemy(
        "base name",
        enemyLevel,
        enemyRace,
        [10, 10, 10, 10, 10, 10]
      );

      enemies.push(enemy);
    }

    setCurrentEnemies(enemies);
  }

  //* hardcoded level value
  return (
    <div className='w-full h-full flex flex-col items-center text-center'>
      <h1 className='w-fit h-fit text-base lg:text-lg mb-5 p-2 border border-black dark:border-white rounded-md'>
        Adventure
      </h1>
      <button className='w-fit h-fit' onClick={() => createEncounter(10)}>
        Create Encounter
      </button>
      <div className='flex flex-row w-full h-full'>
        <div className='w-1/2 h-full bg-primary'>A</div>
        <div className='grid gap-4 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 grid-flow-row w-1/2 h-full mt-4 overflow-clip'>
          {currentEnemies.map((enemy, id) => {
            return <EnemyCard key={id} enemy={enemy} />;
          })}
        </div>
      </div>
    </div>
  );
}

import React, { useContext, useState } from "react";
import { CharacterContext } from "./App";
import Enemy from "../classes/Enemy";
import CharacterBattlePanel from "./CharacterBattlePanel";
import EnemyBattlePanel from "./EnemyBattlePanel";
import BattleDetails from "./BattleDetails";

export default function BattleScreen() {
  const { character, setCharacter } = useContext(CharacterContext);
  const [currentEnemies, setCurrentEnemies] = useState([]);
  const [encounter, setEncounter] = useState();
  const [isPlayerTurn, setIsPlayerTurn] = useState(true);
  const [selected, setSelected] = useState();

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
      <button
        className='w-fit h-fit text-base lg:text-lg mb-5 p-2 border border-black dark:border-white rounded-md'
        onClick={() => createEncounter(3)}
      >
        Adventure
      </button>
      <div className='w-full h-full flex flex-row gap-2 items-center text-center'>
        <div className='flex flex-col gap-2 w-2/5 h-full'>
          <CharacterBattlePanel character={character} />
          <EnemyBattlePanel
            currentEnemies={currentEnemies}
            selected={selected}
            setSelected={setSelected}
          />
        </div>
        <div className='w-3/5 h-full'>
          <BattleDetails selected={selected} />
        </div>
      </div>
    </div>
  );
}

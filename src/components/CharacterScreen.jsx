import React, { useContext, useState, useEffect } from "react";
import { CharacterContext } from "./App";

export default function CharacterScreen(props) {
  const { character } = useContext(CharacterContext);
  const [canUpgrade, setCanUpgrade] = useState(false);

  const descriptions = {
    strength: "Affects physical strength and the power of attacks",
    dexterity: "Finesse and expertise",
    constitution: "Affects the player's hitpoints",
    intelligence: "How learnt one is",
    wisdom: "How much knowledge one has",
    charisma: "Willpower and charm",
  };

  useEffect(() => {
    if (character.exp > character.expNext) {
      setCanUpgrade((prev) => true);
    }
  }, [character.exp, character.expNext]);

  return (
    <div className='w-full h-full'>
      <h1 className='text-center mb-5'>Character</h1>
      <div className='grid gap-x-2 gap-y-4 lg:gap-x-4 lg:gap-y-8 md:grid-flow-row md:grid-cols-3 justify-center'>
        <div className='relative border border-black dark:border-white p-2 rounded-md max-w-[30rem] min-h-[8rem]'>
          <p>Strength: {character.strength} </p>
          {descriptions.strength}
          {canUpgrade ? (
            <button className='absolute left-2 bottom-2 block mt-3 rounded p-1 text-xs lg:text-sm bg-black dark:bg-white text-white dark:text-black'>
              Upgrade
            </button>
          ) : null}
        </div>
        <div className='relative border border-black dark:border-white p-2 rounded-md max-w-[30rem] min-h-[8rem]'>
          <p>Dexterity: {character.dexterity}</p>
          {descriptions.dexterity}
          {canUpgrade ? (
            <button className='absolute left-2 bottom-2 block mt-3 rounded p-1 text-xs lg:text-sm bg-black dark:bg-white text-white dark:text-black'>
              Upgrade
            </button>
          ) : null}
        </div>
        <div className='relative border border-black dark:border-white p-2 rounded-md max-w-[30rem] min-h-[8rem]'>
          <p>Constitutuion: {character.constitution}</p>
          {descriptions.constitution}
          {canUpgrade ? (
            <button className='absolute left-2 bottom-2 block mt-3 rounded p-1 text-xs lg:text-sm bg-black dark:bg-white text-white dark:text-black'>
              Upgrade
            </button>
          ) : null}
        </div>
        <div className='relative border border-black dark:border-white p-2 rounded-md max-w-[30rem] min-h-[8rem]'>
          <p>Intelligence: {character.intelligence}</p>
          {descriptions.intelligence}
          {canUpgrade ? (
            <button className='absolute left-2 bottom-2 block mt-3 rounded p-1 text-xs lg:text-sm bg-black dark:bg-white text-white dark:text-black'>
              Upgrade
            </button>
          ) : null}
        </div>
        <div className='relative border border-black dark:border-white p-2 rounded-md max-w-[30rem] min-h-[8rem]'>
          <p>Wisdom: {character.wisdom}</p>
          {descriptions.wisdom}
          {canUpgrade ? (
            <button className='absolute left-2 bottom-2 block mt-3 rounded p-1 text-xs lg:text-sm bg-black dark:bg-white text-white dark:text-black'>
              Upgrade
            </button>
          ) : null}
        </div>
        <div className='relative border border-black dark:border-white p-2 rounded-md max-w-[30rem] min-h-[8rem]'>
          <p>Charisma: {character.charisma}</p>
          {descriptions.charisma}
          {canUpgrade ? (
            <button className='absolute left-2 bottom-2 block mt-3 rounded p-1 text-xs lg:text-sm bg-black dark:bg-white text-white dark:text-black'>
              Upgrade
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}

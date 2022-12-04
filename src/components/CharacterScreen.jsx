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
      <div className='grid gap-x-2 gap-y-4 lg:gap-x-4 lg:gap-y-8 grid-flow-row  grid-cols-3 justify-around'>
        <div className='border border-black p-2'>
          Strength: {character.strength}{" "}
          {canUpgrade ? <button>Upgrade</button> : null}
          <br />
          {descriptions.strength}
        </div>
        <div className='border border-black p-2'>
          Dexterity: {character.dexterity}
          {canUpgrade ? <button>Upgrade</button> : null}
          <br />
          {descriptions.dexterity}
        </div>
        <div className='border border-black p-2'>
          Constitutuion: {character.constitution}
          {canUpgrade ? <button>Upgrade</button> : null}
          <br />
          {descriptions.constitution}
        </div>
        <div className='border border-black p-2'>
          Intelligence: {character.intelligence}
          {canUpgrade ? <button>Upgrade</button> : null}
          <br />
          {descriptions.intelligence}
        </div>
        <div className='border border-black p-2'>
          Wisdom: {character.wisdom}
          {canUpgrade ? <button>Upgrade</button> : null}
          <br />
          {descriptions.wisdom}
        </div>
        <div className='border border-black p-2'>
          Charisma: {character.charisma}
          {canUpgrade ? <button>Upgrade</button> : null}
          <br />
          {descriptions.charisma}
        </div>
      </div>
    </div>
  );
}

import React, { useContext } from "react";
import { CharacterContext } from "./App";

export default function PlayerCard() {
  const { character } = useContext(CharacterContext);

  return (
    <div className='w-[10rem] h-[15rem] p-3 m-3 border border-secondary dark:border-white rounded-lg'>
      <p className='text-primary'>{character.name}</p>
      <p className=''></p>
      <p className=''>
        HP: {character.currentHp}/{character.hpMax}
      </p>
    </div>
  );
}

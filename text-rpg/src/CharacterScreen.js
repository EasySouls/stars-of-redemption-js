import React, { useContext, useState, useEffect } from "react";
import { CharacterContext } from "./App";

export default function CharacterScreen(props) {
  const { character, setCharacter } = useContext(CharacterContext);
  const [canUpgrade, setCanUpgrade] = useState(false);

  useEffect(() => {
    if (character.exp > character.expNext) {
      setCanUpgrade((prev) => true);
    }
  }, [character.exp, character.expNext]);

  return (
    <div className='character-screen'>
      <h1>Character</h1>
      <div className='character-screen-attributes'>
        <div className='attribute-item'>
          Strength: {character.strength}{" "}
          {canUpgrade ? <button>Upgrade</button> : null}
        </div>
        <div className='attribute-item'>
          Dexterity: {character.dexterity}
          {canUpgrade ? <button>Upgrade</button> : null}
        </div>
        <div className='attribute-item'>
          Constitutuion: {character.constitutuion}
          {canUpgrade ? <button>Upgrade</button> : null}
        </div>
        <div className='attribute-item'>
          Intelligence: {character.intelligence}
          {canUpgrade ? <button>Upgrade</button> : null}
        </div>
        <div className='attribute-item'>
          Wisdom: {character.wisdom}
          {canUpgrade ? <button>Upgrade</button> : null}
        </div>
        <div className='attribute-item'>
          Charisma: {character.charisma}
          {canUpgrade ? <button>Upgrade</button> : null}
        </div>
      </div>
    </div>
  );
}

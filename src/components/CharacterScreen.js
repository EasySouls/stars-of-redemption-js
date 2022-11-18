import React, { useContext, useState, useEffect } from "react";
import { CharacterContext, ThemeContext } from "./App";

export default function CharacterScreen(props) {
  const { character, setCharacter } = useContext(CharacterContext);
  const { borderStyle } = useContext(ThemeContext);
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
    <div className='character-screen'>
      <h1>Character</h1>
      <div className='character-screen-attributes'>
        <div className='attribute-item' style={borderStyle}>
          Strength: {character.strength}{" "}
          {canUpgrade ? <button>Upgrade</button> : null}
          <br />
          {descriptions.strength}
        </div>
        <div className='attribute-item' style={borderStyle}>
          Dexterity: {character.dexterity}
          {canUpgrade ? <button>Upgrade</button> : null}
          <br />
          {descriptions.dexterity}
        </div>
        <div className='attribute-item' style={borderStyle}>
          Constitutuion: {character.constitution}
          {canUpgrade ? <button>Upgrade</button> : null}
          <br />
          {descriptions.constitution}
        </div>
        <div className='attribute-item' style={borderStyle}>
          Intelligence: {character.intelligence}
          {canUpgrade ? <button>Upgrade</button> : null}
          <br />
          {descriptions.intelligence}
        </div>
        <div className='attribute-item' style={borderStyle}>
          Wisdom: {character.wisdom}
          {canUpgrade ? <button>Upgrade</button> : null}
          <br />
          {descriptions.wisdom}
        </div>
        <div className='attribute-item' style={borderStyle}>
          Charisma: {character.charisma}
          {canUpgrade ? <button>Upgrade</button> : null}
          <br />
          {descriptions.charisma}
        </div>
      </div>
    </div>
  );
}
